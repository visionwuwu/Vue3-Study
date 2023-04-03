declare module 'nodeUrl' {
  export interface Url {
    protocol?: string;
    hostname?: string;
    pathname?: string;
  }

  export type Test = {}

  export function parse(urlStr: string, parseQueryString?, slashesDenoteHost?): Url;
}

declare module 'nodePath' {
  export function normalize(p: string): string;
  export function join(...paths: any[]): string;
  export let sep: string;
}