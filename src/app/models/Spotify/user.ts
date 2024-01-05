import {Image} from "./image";

export interface User {
  country: string,
  display_name: string,
  email: string,
  explicit_content: { filter_enabled: boolean, filter_block: boolean },
  external_urls: { spotify: string },
  followers: { href: string, total: number },
  href: string,
  id: string,
  images: Image[]
  product: string,
  type: string,
  uri: string
}
