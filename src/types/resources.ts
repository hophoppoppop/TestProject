import {ColorValue} from 'react-native';

export type resourcesItem = {
  color: ColorValue;
  id: number;
  name: string;
  pantone_value: string;
  year: number;
};

export type resourcesImage = {
  download_url: string;
  id: number;
};
