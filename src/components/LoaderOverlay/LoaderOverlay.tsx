import COLORS from '@constants/color';
import React from 'react';
import {ActivityIndicator, Modal, View} from 'react-native';

import LoadingOverlayStyle from './LoaderOverlay.style';

interface LoaderOverlayProps {
  isVisible?: boolean;
}

function LoaderOverlay(props: LoaderOverlayProps) {
  const {isVisible} = props;

  return (
    <Modal
      statusBarTranslucent
      animationType={'fade'}
      transparent={true}
      visible={isVisible}>
      <View style={LoadingOverlayStyle.container}>
        <ActivityIndicator size={'large'} color={COLORS.BLUE} />
      </View>
    </Modal>
  );
}

export default LoaderOverlay;
