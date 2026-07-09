export interface Track {
  title: string;
  iframeUrl?: string;
}

export interface Album {
  title: string;
  year: string;
  cover: string;
  tracks: Track[];
}
