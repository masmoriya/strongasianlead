import { allSeasonsBreweryPhotos } from './all-seasons-brewery';
import { budokanPanelPhotos } from './budokan-panel';
import { chanIsMissingPhotos } from './chan-is-missing';
import { flowerDrumSongPhotos } from './flower-drum-song';
import { pekingTavernPhotos } from './peking-tavern';
import { salPicketPartyPhotos } from './sal-picket-party';

export const galleryPhotoFiles = {
  'all-seasons-brewery': allSeasonsBreweryPhotos,
  'budokan-panel': budokanPanelPhotos,
  'chan-is-missing': chanIsMissingPhotos,
  'flower-drum-song': flowerDrumSongPhotos,
  'peking-tavern': pekingTavernPhotos,
  'sal-picket-party': salPicketPartyPhotos,
} as const;

export type GalleryPhotoSlug = keyof typeof galleryPhotoFiles;
