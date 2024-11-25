import {Image, ImageBackground, Text, View} from 'react-native';
import React from 'react';
import {resourcesItem} from '../../../types/resources';
import RecommendationCardStyle from './RecommendationCard.style';
import Card from '../../../components/Card/Card';

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
