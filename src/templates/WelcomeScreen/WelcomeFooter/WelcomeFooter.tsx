import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import WelcomeFooterStyle from './WelcomeFooter.style';

interface WelcomeFooterProps {}

function WelcomeFooter(props: WelcomeFooterProps) {
  const {} = props;

  return (
    <TouchableOpacity style={WelcomeFooterStyle.container}>
      <Text style={WelcomeFooterStyle.footerText}>GET STARTED</Text>
    </TouchableOpacity>
  );
}

export default WelcomeFooter;
