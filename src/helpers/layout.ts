import {skeletonLoadingProps} from '@customTypes/layout';
import {Dimensions} from 'react-native';

export function getWindowProps() {
  const {width, height} = Dimensions.get('window');
  return {
    width: width,
    height: height,
  };
}

export function skeletonLoading(
  props: skeletonLoadingProps,
  isLoading: boolean,
) {
  if (isLoading) {
    return props.skeletonContent;
  } else {
    return props.content;
  }
}
