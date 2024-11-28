import Button from '@components/Button/Button';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

interface WelcomeFooterProps {
  toAuthButton: () => void;
}

function WelcomeFooter(props: WelcomeFooterProps) {
  const {toAuthButton} = props;

  return <Button text="GET STARTED" onPress={toAuthButton} />;
}

export default WelcomeFooter;
