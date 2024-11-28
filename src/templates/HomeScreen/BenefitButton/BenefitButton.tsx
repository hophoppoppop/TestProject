import Button from '@components/Button/Button';
import React from 'react';
import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import BenefitButtonStyle from './BenefitButton.style';

interface BenefitButtonProps {
  label?: string | number;
  icon: ImageSourcePropType;
}

function BenefitButton(props: BenefitButtonProps) {
  const {icon, label} = props;

  return (
    <TouchableOpacity style={BenefitButtonStyle.container}>
      <View style={BenefitButtonStyle.iconContainer}>
        <Image style={BenefitButtonStyle.iconImage} source={icon} />
      </View>
      {label ? (
        <View style={BenefitButtonStyle.labelContainer}>
          <Text style={BenefitButtonStyle.labelText}>{label}</Text>
        </View>
      ) : null}
    </TouchableOpacity>
  );
}

export default BenefitButton;
