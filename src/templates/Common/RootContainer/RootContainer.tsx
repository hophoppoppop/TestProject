import React from 'react';
import {
  ColorValue,
  SafeAreaView,
  StatusBar,
  StatusBarStyle,
} from 'react-native';
import RootContainerStyle from './RootContainer.style';
import COLORS from '../../../constants/color';
import LoaderOverlay from '../../../components/LoaderOverlay/LoaderOverlay';
import {useAppDispatch, useAppSelector} from '../../../hooks/redux';
import {getIsLoading} from '../../../redux/slices/appState';

interface RootContainerProps {
  children?: React.ReactNode;
  statusBarStyle?: StatusBarStyle;
  statusBarColor?: ColorValue;
}

function RootContainer(props: RootContainerProps): React.JSX.Element {
  const isLoading = useAppSelector(getIsLoading);
  const dispatch = useAppDispatch();
  const {
    children,
    statusBarColor = COLORS.WHITE,
    statusBarStyle = 'dark-content',
  } = props;
  return (
    <SafeAreaView style={RootContainerStyle.rootContainer}>
      <StatusBar barStyle={statusBarStyle} backgroundColor={statusBarColor} />
      {children}
      <LoaderOverlay isVisible={isLoading} />
    </SafeAreaView>
  );
}

export default RootContainer;
