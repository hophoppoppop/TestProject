import {StyleProp, View, ViewStyle} from 'react-native';
import React from 'react';
import CardStyle from './Card.style';

interface CardProps {
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
}

function Card(props: CardProps) {
  const {style, children} = props;

  return <View style={[CardStyle.container, style]}>{children}</View>;
}

export default Card;
