import {Album} from "./album";
import {Artist} from "./artist";

export interface Track {
  album: Album,
  artists: Artist[],
  available_markets: string[],
  disc_number: number,
  duration_ms: number,
  explicit: boolean,
  external_ids: {
    isrc?: string,
    ean?: string,
    upc?: string
  },
  external_urls: {
    spotify: string
  },
  href: string,
  id: string,
  is_playable?: boolean,
  linked_from?: {},
  restrictions?: {
    reason: string
  },
  name: string,
  popularity: number,
  preview_url: string,
  track_number: number,
  type: string,
  uri: string,
  is_local: boolean
  episode?: boolean
  track?: boolean
}
