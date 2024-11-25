import React, {useEffect, useState} from 'react';
import RootContainer from '../../templates/Common/RootContainer/RootContainer';
import {RootRouteParamList} from '../../types/router';
import {HOME_SCREEN} from '../../constants/router';
import {useAppDispatch} from '../../hooks/redux';
import {DrawerScreenProps} from '@react-navigation/drawer';
import Header from '../../components/Header/Header';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import images from '../../assets/images';
import HomeScreenStyle from './HomeScreen.style';
import {initLogin} from '../../helpers/initialize';
import {apiCall} from '../../helpers/api';
import {HTTP_METHOD} from '../../types/api';
import {ENDPOINTS, EXTERNAL_ENDPOINTS} from '../../constants/api';
import {resourcesImage, resourcesItem} from '../../types/resources';
import COLORS from '../../constants/color';

type ScreenProps = DrawerScreenProps<RootRouteParamList, typeof HOME_SCREEN>;

function HomeScreen({navigation}: ScreenProps): React.JSX.Element {
  const dispatch = useAppDispatch();
  const [currPage, setCurrPage] = useState(0);
  const [data, setData] = useState<resourcesItem[]>([]);
  const [imageData, setImageData] = useState<resourcesImage[]>([]);

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
      });
    }
    initData();
    initImageData();
  }, []);

  return (
    <RootContainer>
      <Header
        leftButtonComponent={
          <TouchableOpacity
            onPress={() => {
              navigation.openDrawer();
            }}
            style={HomeScreenStyle.drawerButton}>
            <Image
              style={HomeScreenStyle.drawerIcon}
              resizeMode={'contain'}
              source={images.ICON_HAMBURGER}
            />
          </TouchableOpacity>
        }
        titleComponent={
          <View style={HomeScreenStyle.titleContainer}>
            <Image
              style={HomeScreenStyle.titleLogo}
              resizeMode={'contain'}
              source={images.LOGO_HEADER}
            />
          </View>
        }
      />
      <FlatList
        data={data}
        contentContainerStyle={HomeScreenStyle.listContentContainer}
        renderItem={({item, index}) => {
          return (
            <View
              style={[
                HomeScreenStyle.cardContainer,
                {
                  backgroundColor: item.color,
                },
              ]}>
              <View style={HomeScreenStyle.detailCardContainer}>
                <Text style={HomeScreenStyle.detailNameText}>{item.name}</Text>
                <Text style={HomeScreenStyle.dateText}>
                  {item.pantone_value} | {item.year}
                </Text>
              </View>
              {imageData[index] ? (
                <View style={HomeScreenStyle.imageContainer}>
                  <Image
                    style={HomeScreenStyle.itemImage}
                    resizeMode={'cover'}
                    source={{uri: imageData[index].download_url}}
                  />
                </View>
              ) : null}
            </View>
          );
        }}
      />
    </RootContainer>
  );
}

export default HomeScreen;
