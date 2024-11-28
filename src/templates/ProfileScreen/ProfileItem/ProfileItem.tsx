import images from '@assets/images';
import Button from '@components/Button/Button';
import React from 'react';
import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import ProfileItemStyle from './ProfileItem.style';

interface ProfileItemProps {
  onPress?: () => void;
  label?: string | number;
  icon: ImageSourcePropType;
}

function ProfileItem(props: ProfileItemProps) {
  const {icon, label, onPress} = props;

  return (
    <TouchableOpacity style={ProfileItemStyle.container} onPress={onPress}>
      <View style={ProfileItemStyle.detailContainer}>
        <View style={ProfileItemStyle.iconContainer}>
          <Image style={ProfileItemStyle.iconImage} source={icon} />
        </View>
        <Text style={ProfileItemStyle.labelText}>{label}</Text>
      </View>
      <View style={ProfileItemStyle.iconChevronContainer}>
        <Image
          style={ProfileItemStyle.iconChevronImage}
          source={images.ICON_CHEVRON_RIGHT}
        />
      </View>
    </TouchableOpacity>
  );
}

export default ProfileItem;
