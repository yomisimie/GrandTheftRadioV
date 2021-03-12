export class Song {
  song: string;
  artist: string;
  name: string;

  constructor(values: any = {}) {
    Object.assign(this, values);
  }
}
