import Card from '@components/Card/Card';
import {resourcesItem} from '@customTypes/resources';
import React from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';

import RecommendationCardStyle from './RecommendationCard.style';

interface RecommendationCardProps {
  imageURL: string;
}

function RecommendationCard(props: RecommendationCardProps) {
  const {imageURL} = props;

  return (
    <Card style={[RecommendationCardStyle.cardContainer]}>
      <Image
        style={RecommendationCardStyle.imageBackgroundContainer}
        resizeMode="cover"
        source={{uri: imageURL}}
      />
    </Card>
  );
}

export default RecommendationCard;
