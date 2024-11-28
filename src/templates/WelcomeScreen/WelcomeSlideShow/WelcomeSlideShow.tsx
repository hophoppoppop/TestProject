import COLORS from '@constants/color';
import React from 'react';
import {Image, ImageSourcePropType, Text, View} from 'react-native';

import WelcomeSlideShowStyle from './WelcomeSlideShow.style';

interface WelcomeSlideShowProps {
  imageSource?: ImageSourcePropType;
  title?: string;
  subtitle?: string;
  footerComponent?: React.ReactNode;
}

function WelcomeSlideShow(props: WelcomeSlideShowProps) {
  const {footerComponent, imageSource, subtitle, title} = props;

  return (
    <View style={WelcomeSlideShowStyle.container}>
      <View style={WelcomeSlideShowStyle.imageContainer}>
        <Image
          style={WelcomeSlideShowStyle.logoImage}
          resizeMode={'contain'}
          source={imageSource}
        />
      </View>
      <View style={WelcomeSlideShowStyle.titleContainer}>
        <Text style={WelcomeSlideShowStyle.titleText}>{title}</Text>
      </View>
      <View style={WelcomeSlideShowStyle.subtitleContainer}>
        <Text style={WelcomeSlideShowStyle.subtitleText}>{subtitle}</Text>
      </View>
      <View style={WelcomeSlideShowStyle.footerContainer}>
        {footerComponent}
      </View>
    </View>
  );
}

export default WelcomeSlideShow;
