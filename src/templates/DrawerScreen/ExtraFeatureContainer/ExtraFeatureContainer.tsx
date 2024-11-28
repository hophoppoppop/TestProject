import Button from '@components/Button/Button';
import React from 'react';
import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import ExtraFeatureContainerStyle from './ExtraFeatureContainer.style';

interface ExtraFeatureContainerProps {
  label: string;
  icon: ImageSourcePropType;
  quantity?: number;
}

function ExtraFeatureContainer(props: ExtraFeatureContainerProps) {
  const {icon, label, quantity} = props;

  return (
    <TouchableOpacity style={ExtraFeatureContainerStyle.extraSubContainer}>
      <Text style={ExtraFeatureContainerStyle.subTitle}>{label}</Text>
      <View style={ExtraFeatureContainerStyle.subIconContainer}>
        <Image style={ExtraFeatureContainerStyle.iconImage} source={icon} />
        {quantity ? (
          <Text
            adjustsFontSizeToFit={true}
            numberOfLines={1}
            style={ExtraFeatureContainerStyle.quantityText}>
            {quantity}
          </Text>
        ) : null}
      </View>
    </TouchableOpacity>
  );
}

export default ExtraFeatureContainer;
