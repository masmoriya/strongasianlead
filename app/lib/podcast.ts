import { XMLParser } from 'fast-xml-parser';

export const PODCAST_RSS_URL = 'https://anchor.fm/s/4ceb8c54/podcast/rss';

const REVALIDATE_SECONDS = 60 * 60;
const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

type UnknownRecord = Record<string, unknown>;

export type PodcastEpisode = {
  id: string;
  title: string;
  description: string;
  publishedAt: string;
  duration: string;
  imageUrl: string;
  audioUrl: string;
  audioType: string;
};

export type PodcastFeed = {
  title: string;
  description: string;
  imageUrl: string;
  episodes: PodcastEpisode[];
};

const parser = new XMLParser({
  attributeNamePrefix: '',
  ignoreAttributes: false,
  trimValues: true,
});

export async function getPodcastFeed(): Promise<PodcastFeed> {
  const rssResponse = await fetch(PODCAST_RSS_URL, { next: { revalidate: REVALIDATE_SECONDS } });

  if (!rssResponse.ok) {
    throw new Error(`Unable to load podcast RSS feed: ${rssResponse.status}`);
  }

  const feed = parser.parse(await rssResponse.text()) as UnknownRecord;
  return parsePodcastFeed(feed);
}

function parsePodcastFeed(feed: UnknownRecord): PodcastFeed {
  const channel = asRecord(asRecord(feed.rss).channel);
  const imageUrl = attributeValue(channel['itunes:image'], 'href');
  const items = toArray(channel.item);

  return {
    title: stringValue(channel.title) || 'Strong Asian Lead',
    description: cleanText(stringValue(channel.description)),
    imageUrl,
    episodes: items.map((item, index) => parseEpisode(asRecord(item), imageUrl, index)),
  };
}

function parseEpisode(item: UnknownRecord, fallbackImageUrl: string, index: number): PodcastEpisode {
  const guid = stringValue(item.guid);
  const enclosure = asRecord(item.enclosure);
  const rawDescription = stringValue(item['itunes:summary']) || stringValue(item.description);

  return {
    id: guid || stringValue(item.link) || `episode-${index}`,
    title: stringValue(item.title) || 'Episode',
    description: summarizeText(cleanText(rawDescription)),
    publishedAt: formatEpisodeDate(stringValue(item.pubDate)),
    duration: stringValue(item['itunes:duration']),
    imageUrl: attributeValue(item['itunes:image'], 'href') || fallbackImageUrl,
    audioUrl: stringValue(enclosure.url),
    audioType: stringValue(enclosure.type) || 'audio/mpeg',
  };
}

function cleanText(value: string) {
  return value
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/<\/p>/gi, ' ')
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/gi, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

function summarizeText(value: string, maxLength = 220) {
  if (value.length <= maxLength) {
    return value;
  }

  const summary = value.slice(0, maxLength).replace(/\s+\S*$/, '');
  return `${summary}...`;
}

function formatEpisodeDate(value: string) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return '';
  }

  return `${MONTH_NAMES[date.getUTCMonth()]} ${date.getUTCDate()}, ${date.getUTCFullYear()}`;
}

function toArray(value: unknown) {
  return Array.isArray(value) ? value : value ? [value] : [];
}

function asRecord(value: unknown): UnknownRecord {
  return value && typeof value === 'object' ? (value as UnknownRecord) : {};
}

function stringValue(value: unknown) {
  return typeof value === 'string' || typeof value === 'number' ? String(value) : '';
}

function attributeValue(value: unknown, attribute: string) {
  return stringValue(asRecord(value)[attribute]);
}
