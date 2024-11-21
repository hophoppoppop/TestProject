import React, {useState} from 'react';
import {
  ColorValue,
  DimensionValue,
  NativeScrollEvent,
  ScrollView,
  Text,
  View,
} from 'react-native';
import ImageSliderStyle from './ImageSlider.style';
import COLORS from '../../constants/color';

export interface ImageSliderProps {
  children: React.ReactNode;
  width?: DimensionValue;
  height?: DimensionValue;
  showDot?: boolean;
  dotSize?: number;
  inactiveDotColor?: ColorValue;
  activeDotColor?: ColorValue;
}

function ImageSlider(props: ImageSliderProps): React.JSX.Element {
  const {
    width = '100%',
    height = '100%',
    children,
    showDot = true,
    dotSize = 30,
    inactiveDotColor = COLORS.GREY,
    activeDotColor = COLORS.BLUE,
  } = props;

  const childrenArray = React.Children.toArray(children);

  const [activeIndex, SetActiveIndex] = useState(0);

  const onChange = ({nativeEvent}: {nativeEvent: NativeScrollEvent}) => {
    const slide = Math.ceil(
      nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
    );
    if (slide !== activeIndex) {
      SetActiveIndex(slide);
    }
  };

  return (
    <View
      style={{
        width,
        height,
      }}>
      <ScrollView
        pagingEnabled
        horizontal
        onScroll={onChange}
        showsHorizontalScrollIndicator={false}
        style={{
          flex: 1,
        }}>
        {childrenArray.map((childNode, index) => {
          return (
            <View key={index.toString()} style={{width, height}}>
              {childNode}
            </View>
          );
        })}
      </ScrollView>
      {showDot ? (
        <View style={ImageSliderStyle.pagination}>
          {childrenArray.map((childNode, index) => {
            const isActive = index === activeIndex;
            return (
              <Text
                key={index.toString()}
                style={[
                  {
                    fontSize: dotSize,
                    color: isActive ? activeDotColor : inactiveDotColor,
                  },
                  ImageSliderStyle.dot,
                ]}>
                ●
              </Text>
            );
          })}
        </View>
      ) : null}
    </View>
  );
}

export default ImageSlider;
