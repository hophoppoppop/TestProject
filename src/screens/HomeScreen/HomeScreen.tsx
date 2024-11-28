import images from '@assets/images';
import Card from '@components/Card/Card';
import Header from '@components/Header/Header';
import {ENDPOINTS, EXTERNAL_ENDPOINTS} from '@constants/api';
import {HOME_SCREEN, PROMOS_SCREEN} from '@constants/router';
import {HTTP_METHOD} from '@customTypes/api';
import {resourcesImage, resourcesItem} from '@customTypes/resources';
import {RootRouteParamList} from '@customTypes/router';
import {apiCall} from '@helpers/api';
import {initLogin} from '@helpers/initialize';
import {skeletonLoading} from '@helpers/layout';
import {useAppDispatch} from '@hooks/redux';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import ExtraFunctionSkeleton from '@skeletons/HomeScreen/ExtraFunctionSkeleton';
import RecommendationSkeleton from '@skeletons/HomeScreen/RecommendationSkeleton';
import PromosSkeleton from '@skeletons/PromoScreen/PromosSkeleton';
import RootContainer from '@templates/Common/RootContainer/RootContainer';
import BenefitButton from '@templates/HomeScreen/BenefitButton/BenefitButton';
import CategoryTitle from '@templates/HomeScreen/CategoryTitle/CategoryTitle';
import PromoCard from '@templates/HomeScreen/PromoCard/PromoCard';
import RecommendationCard from '@templates/HomeScreen/RecommendationCard/RecommendationCard';
import {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';

import HomeScreenStyle from './HomeScreen.style';

type ScreenProps = BottomTabScreenProps<RootRouteParamList, typeof HOME_SCREEN>;

function HomeScreen({navigation}: ScreenProps): React.JSX.Element {
  const dispatch = useAppDispatch();
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
            page: 1,
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
            page: startpoint + 1,
            limit: 5,
          },
        },
        isThirdParty: true,
      })
        .then(callback => {
          setImageData(callback);
          setRecommendationData(callback);
        })
        .catch(err => {
          console.log(err);
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
          {skeletonLoading(
            {
              skeletonContent: <ExtraFunctionSkeleton />,
              content: (
                <>
                  <TouchableOpacity style={HomeScreenStyle.pointContainer}>
                    <Image
                      style={HomeScreenStyle.pointImage}
                      source={images.ICON_POINT_HIGHLIGHTED}
                    />
                    <Text style={HomeScreenStyle.pointText}>144 points</Text>
                  </TouchableOpacity>
                  <View style={HomeScreenStyle.otherFunctionContainer}>
                    <BenefitButton icon={images.ICON_COUPON} label={'Coupon'} />
                    <BenefitButton icon={images.ICON_QR} label={'Scan'} />
                  </View>
                </>
              ),
            },
            data.length === 0,
          )}
        </Card>
        <CategoryTitle label={'Recommendation'} />
        {skeletonLoading(
          {
            skeletonContent: <RecommendationSkeleton />,
            content: (
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
            ),
          },
          recommendationData.length === 0,
        )}
        <CategoryTitle
          label={'Promos'}
          onPress={() => {
            navigation.navigate(PROMOS_SCREEN);
          }}
        />
        {skeletonLoading(
          {
            content: (
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
            ),
            skeletonContent: <PromosSkeleton />,
          },
          data.length === 0,
        )}
      </ScrollView>
    </RootContainer>
  );
}

export default HomeScreen;
