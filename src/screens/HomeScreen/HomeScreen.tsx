import React from 'react';
import RootContainer from '../../templates/Common/RootContainer/RootContainer';
import {RootRouteParamList} from '../../types/router';
import {HOME_SCREEN} from '../../constants/router';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {getToken} from '../../redux/slices/user';
import {DrawerScreenProps} from '@react-navigation/drawer';
import Header from '../../components/Header/Header';
import {Image, TouchableOpacity, View} from 'react-native';
import images from '../../assets/images';
import HomeScreenStyle from './HomeScreen.style';

type ScreenProps = DrawerScreenProps<RootRouteParamList, typeof HOME_SCREEN>;

function HomeScreen({navigation}: ScreenProps): React.JSX.Element {
  const userToken = useAppSelector(getToken);
  const dispatch = useAppDispatch();

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
    </RootContainer>
  );
}

export default HomeScreen;
