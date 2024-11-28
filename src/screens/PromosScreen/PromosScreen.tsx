import Header from '@components/Header/Header';
import {ENDPOINTS, EXTERNAL_ENDPOINTS} from '@constants/api';
import COLORS from '@constants/color';
import {PROMOS_SCREEN} from '@constants/router';
import {HTTP_METHOD} from '@customTypes/api';
import {resourcesImage, resourcesItem} from '@customTypes/resources';
import {RootRouteParamList} from '@customTypes/router';
import {apiCall} from '@helpers/api';
import {skeletonLoading} from '@helpers/layout';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import HomeScreenStyle from '@screens/HomeScreen/HomeScreen.style';
import PromosSkeleton from '@skeletons/PromoScreen/PromosSkeleton';
import RootContainer from '@templates/Common/RootContainer/RootContainer';
import PromoCard from '@templates/HomeScreen/PromoCard/PromoCard';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, ToastAndroid} from 'react-native';

type ScreenProps = BottomTabScreenProps<
  RootRouteParamList,
  typeof PROMOS_SCREEN
>;

function PromosScreen({navigation}: ScreenProps): React.JSX.Element {
  const [currPage, setCurrPage] = useState(0);
  const [totalPages, setTotalPages] = useState(-1);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<resourcesItem[]>([]);
  const [imageData, setImageData] = useState<resourcesImage[]>([]);
  const isNotLastPage = totalPages > currPage;

  useEffect(() => {
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
        setImageData([...imageData, ...callback]);
      });
    }

    async function initData() {
      setIsLoading(true);
      apiCall({
        method: HTTP_METHOD.GET,
        endpoints: ENDPOINTS.RESOURCES,
        body: {
          query: {
            page: currPage + 1,
            per_page: 5,
          },
        },
      })
        .then(callback => {
          if (totalPages === -1) setTotalPages(callback.total_pages);
          setData([...data, ...callback.data]);
        })
        .catch(err => {
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
    initData();
    initImageData();
  }, [currPage]);

  return (
    <RootContainer>
      <Header title={'PROMO'} />

      {skeletonLoading(
        {
          content: (
            <FlatList
              data={data}
              contentContainerStyle={HomeScreenStyle.listContentContainer}
              onEndReached={() => {
                if (
                  data.length > 0 &&
                  imageData.length > 0 &&
                  isNotLastPage &&
                  !isLoading
                ) {
                  setCurrPage(currPage + 1);
                }
              }}
              ListFooterComponent={() => {
                if (isLoading && isNotLastPage) {
                  return (
                    <ActivityIndicator size={'large'} color={COLORS.BLUE} />
                  );
                }
                return null;
              }}
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
    </RootContainer>
  );
}

export default PromosScreen;
