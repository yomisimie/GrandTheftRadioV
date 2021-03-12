import {Song} from './song';
import {CustomFavicon} from '../../favicon.config';

export class Radio {
  name: string;
  image: string;
  color: string;
  favicon: CustomFavicon;
  songs: Song[];

  constructor(values: any = {}) {
    Object.assign(this, values);
  }
}
