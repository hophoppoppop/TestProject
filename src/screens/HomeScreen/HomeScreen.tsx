import images from '@assets/images';
import Card from '@components/Card/Card';
import Header from '@components/Header/Header';
import {ENDPOINTS, EXTERNAL_ENDPOINTS} from '@constants/api';
import {HOME_SCREEN} from '@constants/router';
import {apiCall} from '@helpers/api';
import {initLogin} from '@helpers/initialize';
import {useAppDispatch} from '@hooks/redux';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import RootContainer from '@templates/Common/RootContainer/RootContainer';
import BenefitButton from '@templates/HomeScreen/BenefitButton/BenefitButton';
import PromoCard from '@templates/HomeScreen/PromoCard/PromoCard';
import RecommendationCard from '@templates/HomeScreen/RecommendationCard/RecommendationCard';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {HTTP_METHOD} from 'src/customTypes/api';
import {resourcesImage, resourcesItem} from 'src/customTypes/resources';
import {RootRouteParamList} from 'src/customTypes/router';

import HomeScreenStyle from './HomeScreen.style';

type ScreenProps = BottomTabScreenProps<RootRouteParamList, typeof HOME_SCREEN>;

function HomeScreen({navigation}: ScreenProps): React.JSX.Element {
  const dispatch = useAppDispatch();
  const [currPage, setCurrPage] = useState(0);
  const [data, setData] = useState<resourcesItem[]>([]);
  const [imageData, setImageData] = useState<resourcesImage[]>([]);
  const [recommendationData, setRecommendationData] = useState<
    resourcesImage[]
  >([]);

  useEffect(() => {
    initLogin(dispatch);

    async function initData() {
      apiCall({
        method: HTTP_METHOD.GET,
        endpoints: ENDPOINTS.RESOURCES,
        body: {
          query: {
            page: currPage + 1,
            per_page: 5,
          },
        },
      }).then(callback => {
        setData(callback.data);
      });
    }

    async function initImageData() {
      const startpoint = 5; //TO GENERATE MORE UNIQUE IMAGES
      apiCall({
        method: HTTP_METHOD.GET,
        endpoints: EXTERNAL_ENDPOINTS.IMAGES,
        body: {
          query: {
            page: currPage + startpoint + 1,
            limit: 5,
          },
        },
        isThirdParty: true,
      }).then(callback => {
        setImageData(callback);
        setRecommendationData(callback);
      });
    }
    initData();
    initImageData();
  }, []);

  return (
    <RootContainer>
      <Header
        titleComponent={
          <View style={HomeScreenStyle.titleContainer}>
            <Image
              style={HomeScreenStyle.titleLogo}
              resizeMode={'contain'}
              source={images.LOGO_HEADER}
            />
          </View>
        }
        rightButtonComponent={
          <TouchableOpacity style={HomeScreenStyle.mailButton}>
            <Image
              style={HomeScreenStyle.mailIcon}
              resizeMode={'contain'}
              source={images.ICON_NOTIFICATION}
            />
          </TouchableOpacity>
        }
      />
      <ScrollView
        contentContainerStyle={HomeScreenStyle.scrollViewContentContainer}>
        <Card style={HomeScreenStyle.benefitCardContainer}>
          <View style={HomeScreenStyle.pointContainer}>
            <Image
              style={HomeScreenStyle.pointImage}
              source={images.ICON_POINT_HIGHLIGHTED}
            />
            <Text style={HomeScreenStyle.pointText}>144 points</Text>
          </View>
          <View style={HomeScreenStyle.otherFunctionContainer}>
            <BenefitButton icon={images.ICON_COUPON} label={'Coupon'} />
            <BenefitButton icon={images.ICON_QR} label={'Scan'} />
          </View>
        </Card>
        {/* <View
          style={{
            flex: 1,
            flexDirection: 'row',
            marginTop: 20,
            flexWrap: 'wrap',
          }}>
          <View
            style={{
              width: '25%',
              aspectRatio: 1,
              padding: 5,
            }}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View style={{flex: 1, aspectRatio: 1, backgroundColor: 'red'}}>
                <Image
                  style={{width: '100%', height: '100%'}}
                  source={images.ICON_COUPON}
                />
              </View>
              <Text>asdf</Text>
            </View>
          </View>
        </View> */}
        <View style={HomeScreenStyle.recommendationTitleContainer}>
          <Text style={HomeScreenStyle.categoryTitleText}>Recommendation</Text>
          <TouchableOpacity
            style={HomeScreenStyle.recommendationButtonContainer}>
            <Text>See More</Text>
            <Image
              style={HomeScreenStyle.recommendationButtonIcon}
              source={images.ICON_CHEVRON_RIGHT}
            />
          </TouchableOpacity>
        </View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={recommendationData}
          contentContainerStyle={
            HomeScreenStyle.recommendationListContentContainer
          }
          renderItem={({item}) => {
            return <RecommendationCard imageURL={item.download_url} />;
          }}
        />
        <Text style={HomeScreenStyle.promoTitleText}>Promos</Text>
        <FlatList
          scrollEnabled={false}
          data={data}
          contentContainerStyle={HomeScreenStyle.listContentContainer}
          renderItem={({item, index}) => {
            return (
              <PromoCard
                imageURL={imageData[index]?.download_url}
                item={item}
              />
            );
          }}
        />
      </ScrollView>
    </RootContainer>
  );
}

export default HomeScreen;
