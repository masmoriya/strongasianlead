import { galleryPhotoFiles, type GalleryPhotoSlug } from './gallery-photo-data';

export type VideoItem = {
  title: string;
  description: string;
  src: string;
};

export type Gallery = {
  slug: GalleryPhotoSlug;
  title: string;
  date: string;
  directory: string;
  cover: string;
  summary: string;
  description: string;
};

export const videos: VideoItem[] = [
  {
    title: 'Community impact',
    description: 'A moving portrait of the Strong Asian Lead community and the creative network that formed around the work.',
    src: 'https://www.youtube.com/embed/x0DYWqZwuRU',
  },
  {
    title: 'Golden TV interview',
    description: 'A conversation about building visibility, care, and opportunity for AANHPI creatives in entertainment.',
    src: 'https://www.youtube.com/embed/gUWCbnxwk14',
  },
  {
    title: 'Community events',
    description: 'A look inside the screenings, panels, and gatherings that brought emerging artists and industry peers together.',
    src: 'https://www.youtube.com/embed/yAnln47C1nQ',
  },
  {
    title: 'Legacy Screening Series',
    description: 'A record of the film history programming that connected older Asian American cinema with new generations.',
    src: 'https://www.youtube.com/embed/KYl9jsqF6oA',
  },
  {
    title: 'Early demo',
    description: 'The original platform concept and early vision for helping storytellers find education, resources, and community.',
    src: 'https://www.youtube.com/embed/t0q3ul6Rx64',
  },
];

export const galleries: Gallery[] = [
  {
    slug: 'chan-is-missing',
    title: 'Chan Is Missing screening',
    date: 'March 2023',
    directory: 'ChanIsMissingPhotos',
    cover: '032323_SAL_Chan_Is_Missing_V2-95-90.jpg',
    summary: 'A Legacy Screening Series gathering around Wayne Wang’s landmark independent film.',
    description:
      'The Chan Is Missing event brought Asian American film history into the room with a new generation of artists, organizers, and community members.',
  },
  {
    slug: 'peking-tavern',
    title: 'Peking Tavern APIHM event',
    date: 'May 2022',
    directory: 'PekingTavern',
    cover: '5.28.22_APIHM_Event_31-1.jpg',
    summary: 'An Asian Pacific Islander Heritage Month community celebration in Los Angeles.',
    description:
      'A casual gathering for conversation, connection, and celebration during APIHM, centered on the creative community Strong Asian Lead was building.',
  },
  {
    slug: 'flower-drum-song',
    title: 'Flower Drum Song screening',
    date: 'May 2023',
    directory: 'FDS',
    cover: '05.28.23_Legacy_FDS_Photos_Topher_118-30.jpg',
    summary: 'A Legacy Screening Series event with Nancy Wang Yuen and the Strong Asian Lead community.',
    description:
      'This screening revisited Flower Drum Song through the lens of representation, memory, Hollywood history, and the artists who continue to push the conversation forward.',
  },
  {
    slug: 'budokan-panel',
    title: 'Budokan panel',
    date: 'August 2022',
    directory: 'Budokan Panel',
    cover: 'SAL_PANEL_08_20_22 (30)-1.jpg',
    summary: 'A community panel and networking event for filmmakers and entertainment workers.',
    description:
      'The Budokan panel created a direct space for AANHPI creatives to share practical experience, talk openly, and meet peers across the industry.',
  },
  {
    slug: 'all-seasons-brewery',
    title: 'All Seasons Brewery event',
    date: 'May 2023',
    directory: 'All Seasons Bewery',
    cover: '5.18.23_All Seasons_4-1.jpg',
    summary: 'A neighborhood gathering for the Strong Asian Lead creative network.',
    description:
      'This event kept the work simple and human: gathering people in the same room, making introductions, and strengthening the creative network.',
  },
  {
    slug: 'sal-picket-party',
    title: 'SAL Picket Party',
    date: 'September 2023',
    directory: 'SAL PICKET PARTY',
    cover: '9.6.23_StrongAsianLead_PicketParty_Narra-7-28.jpg',
    summary: 'A WGA and SAG-AFTRA strike solidarity gathering at Netflix.',
    description:
      'The picket party stood with workers during the strike and kept the Strong Asian Lead community visible in a moment shaped by labor, equity, and creative futures.',
  },
];

export function photoPath(gallery: Gallery, fileName: string) {
  return `/Photos/${gallery.directory}/${fileName}`;
}

export async function getGalleryPhotos(gallery: Gallery) {
  return galleryPhotoFiles[gallery.slug].map((fileName) => ({
    src: photoPath(gallery, fileName),
    alt: `${gallery.title} photo`,
  }));
}
