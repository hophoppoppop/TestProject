import React from 'react';
import {
  ColorValue,
  SafeAreaView,
  StatusBar,
  StatusBarStyle,
} from 'react-native';
import RootContainerStyle from './RootContainer.style';
import COLORS from '../../constants/color';

interface RootContainerProps {
  children?: React.ReactNode;
  statusBarStyle?: StatusBarStyle;
  statusBarColor?: ColorValue;
}

function RootContainer(props: RootContainerProps): React.JSX.Element {
  const {
    children,
    statusBarColor = COLORS.WHITE,
    statusBarStyle = 'dark-content',
  } = props;
  return (
    <SafeAreaView style={RootContainerStyle.rootContainer}>
      <StatusBar barStyle={statusBarStyle} backgroundColor={statusBarColor} />
      {children}
    </SafeAreaView>
  );
}

export default RootContainer;
