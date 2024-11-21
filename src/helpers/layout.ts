import {Dimensions} from 'react-native';

export function getWindowProps() {
  const {width, height} = Dimensions.get('window');
  return {
    width: width,
    height: height,
  };
}
