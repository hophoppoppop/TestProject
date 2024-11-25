import {Image, Text, View} from 'react-native';
import React from 'react';
import {resourcesItem} from '../../../types/resources';
import PromoCardStyle from './PromoCard.style';
import Card from '../../../components/Card/Card';

interface PromoCardProps {
  item: resourcesItem;
  imageURL: string;
}

function PromoCard(props: PromoCardProps) {
  const {item, imageURL} = props;

  return (
    <Card
      style={[
        PromoCardStyle.cardContainer,
        {
          backgroundColor: item.color,
        },
      ]}>
      <View style={PromoCardStyle.detailCardContainer}>
        <Text style={PromoCardStyle.detailNameText}>{item.name}</Text>
        <Text style={PromoCardStyle.dateText}>
          {item.pantone_value} | {item.year}
        </Text>
      </View>
      {imageURL ? (
        <View style={PromoCardStyle.imageContainer}>
          <Image
            style={PromoCardStyle.itemImage}
            resizeMode={'cover'}
            source={{uri: imageURL}}
          />
        </View>
      ) : null}
    </Card>
  );
}

export default PromoCard;
