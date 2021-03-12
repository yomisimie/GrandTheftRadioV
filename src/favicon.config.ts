// enum all your different favicons
// (for type safety)
import {RadioMirrorPark} from './app/radios/RadioMirrorPark';

export enum CustomFavicon {
  WCTR = 'WCTR',
  RADIO_MIRROR_PARK = 'RadioMirrorPark',
}

export type AvailableCustomFavicons = { [key in CustomFavicon]: string };

// -------------------------------------------------------------
// @warning do not forget to add your favicons to your bundle
// you should double check into angular.json file
// -------------------------------------------------------------
// map all the types of favicon to their href
export const customFavicons: AvailableCustomFavicons = {
  // for some reason, impossible to use the syntax
  // [CustomFavicon.FAVICON_SUCCESS]: 'favicon-success.ico',
  // otherwise we end up with an AOT ERROR
  RadioMirrorPark: 'assets/radio/Radio Mirror Park.png',
  WCTR: 'assets/radio/WCTR.png',
};
