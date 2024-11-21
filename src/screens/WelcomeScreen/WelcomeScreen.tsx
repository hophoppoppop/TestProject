import React from 'react';
import {Text, View} from 'react-native';
import RootContainer from '../../components/RootContainer/RootContainer';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import {getWindowProps} from '../../helpers/layout';
import WelcomeSlideShow from '../../templates/WelcomeScreen/WelcomeSlideShow/WelcomeSlideShow';
import images from '../../assets/images';
import WelcomeFooter from '../../templates/WelcomeScreen/WelcomeFooter/WelcomeFooter';

function OpeningPage(): React.JSX.Element {
  const {width, height} = getWindowProps();

  return (
    <RootContainer>
      <ImageSlider width={width}>
        <WelcomeSlideShow
          title="Lorem Ipsum"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada ut tortor sit amet placerat. Sed semper in justo a consectetur."
          imageSource={images.LOGO_ORDER}
        />
        <WelcomeSlideShow
          title="Lorem ipsum dolor sit"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada ut tortor sit amet placerat."
          imageSource={images.LOGO_DELIVERY}
        />
        <WelcomeSlideShow
          title="Lorem ipsum dolo"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada ut tortor sit amet placerat. Sed semper in justo a consectetur."
          imageSource={images.LOGO_RECEIPT}
          footerComponent={<WelcomeFooter />}
        />
      </ImageSlider>
    </RootContainer>
  );
}

export default OpeningPage;
