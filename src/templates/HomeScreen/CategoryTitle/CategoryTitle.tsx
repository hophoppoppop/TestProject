import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import CategoryTitleStyle from './CategoryTitle.style';
import images from '../../../assets/images';

interface CategoryTitleProps {
  label?: string;
  onPress?: () => void;
}

function CategoryTitle(props: CategoryTitleProps) {
  const {onPress, label} = props;

  return (
    <View style={CategoryTitleStyle.recommendationTitleContainer}>
      <Text style={CategoryTitleStyle.categoryTitleText}>{label}</Text>
      <TouchableOpacity
        onPress={onPress}
        style={CategoryTitleStyle.recommendationButtonContainer}>
        <Text>See More</Text>
        <Image
          style={CategoryTitleStyle.recommendationButtonIcon}
          source={images.ICON_CHEVRON_RIGHT}
        />
      </TouchableOpacity>
    </View>
  );
}

export default CategoryTitle;