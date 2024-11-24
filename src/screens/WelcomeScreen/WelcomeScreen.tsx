import React from 'react';
import RootContainer from '../../templates/Common/RootContainer/RootContainer';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import {getWindowProps} from '../../helpers/layout';
import WelcomeSlideShow from '../../templates/WelcomeScreen/WelcomeSlideShow/WelcomeSlideShow';
import images from '../../assets/images';
import WelcomeFooter from '../../templates/WelcomeScreen/WelcomeFooter/WelcomeFooter';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootRouteParamList} from '../../types/router';
import {LOGIN_SCREEN, WELCOME_SCREEN} from '../../constants/router';

type ScreenProps = NativeStackScreenProps<
  RootRouteParamList,
  typeof WELCOME_SCREEN
>;

function WelcomeScreen({navigation}: ScreenProps): React.JSX.Element {
  const {width} = getWindowProps();

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
          footerComponent={
            <WelcomeFooter
              toAuthButton={() => {
                navigation.reset({
                  routes: [
                    {
                      name: LOGIN_SCREEN,
                    },
                  ],
                });
              }}
            />
          }
        />
      </ImageSlider>
    </RootContainer>
  );
}

export default WelcomeScreen;
