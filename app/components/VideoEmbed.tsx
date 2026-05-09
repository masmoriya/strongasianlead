import type { VideoItem } from '../lib/media';

export function VideoEmbed({ video }: { video: VideoItem }) {
  return (
    <article>
      <div className="surface aspect-video bg-black">
        <iframe
          src={video.src}
          title={video.title}
          className="h-full w-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>
      <div className="mt-4 px-1">
        <h2 className="text-xl font-semibold">{video.title}</h2>
        <p className="mt-2 text-sm text-muted">{video.description}</p>
      </div>
    </article>
  );
}
