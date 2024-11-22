import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Button from '../../../components/Button/Button';

interface WelcomeFooterProps {
  toAuthButton: () => void;
}

function WelcomeFooter(props: WelcomeFooterProps) {
  const {toAuthButton} = props;

  return <Button text="GET STARTED" onPress={toAuthButton} />;
}

export default WelcomeFooter;
