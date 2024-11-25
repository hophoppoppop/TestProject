import {Image, ImageSourcePropType, View} from 'react-native';
import React from 'react';
import TabButtonStyle from './TabButton.style';

interface TabButtonProps {
  highlightedIcon?: ImageSourcePropType;
  unhighlightedIcon?: ImageSourcePropType;
  focused: boolean;
  size: number;
}

function TabButton(props: TabButtonProps) {
  const {highlightedIcon, unhighlightedIcon, focused, size} = props;

  return (
    <View style={{width: size, height: size}}>
      <Image
        style={TabButtonStyle.tabIcon}
        source={focused ? highlightedIcon : unhighlightedIcon}
      />
    </View>
  );
}

export default TabButton;
