import {Image} from "./image";
import {User} from "./user";

export interface Playlist {
  collaborative: boolean,
  description: string,
  external_urls: {
    spotify: string
  },
  href: string,
  id: string,
  images: Image[],
  name: string,
  owner: User,
  public: boolean,
  snapshot_id: string,
  tracks: {
    href: string,
    total: number
  },
  type: string,
  uri: string
}
