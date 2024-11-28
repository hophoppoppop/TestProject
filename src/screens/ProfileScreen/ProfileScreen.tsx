import React, {useEffect, useState} from 'react';
import RootContainer from '../../templates/Common/RootContainer/RootContainer';
import {RootRouteParamList} from '../../types/router';
import {
  HOME_SCREEN,
  PROFILE_SCREEN,
  PROMOS_SCREEN,
} from '../../constants/router';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import Header from '../../components/Header/Header';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import images from '../../assets/images';
import {initLogin} from '../../helpers/initialize';
import {apiCall} from '../../helpers/api';
import {HTTP_METHOD} from '../../types/api';
import {ENDPOINTS, EXTERNAL_ENDPOINTS} from '../../constants/api';
import {resourcesImage, resourcesItem} from '../../types/resources';
import PromoCard from '../../templates/HomeScreen/PromoCard/PromoCard';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import COLORS from '../../constants/color';
import ProfileScreenStyle from './ProfileScreen.style';
import {getUserData} from '../../redux/slices/user';
import ExtraFeatureContainer from '../../templates/DrawerScreen/ExtraFeatureContainer/ExtraFeatureContainer';
import ProfileItem from '../../templates/ProfileScreen/ProfileItem/ProfileItem';
import Card from '../../components/Card/Card';
import {PROFILE_MENU, PROFILE_OTHER_MENU} from '../../constants/profile';
import {PROFILE_ACTIONS} from '../../types/profile';
import {SignOut} from '../../helpers/user';
import {getBuildNumber, getVersion} from 'react-native-device-info';

type ScreenProps = BottomTabScreenProps<
  RootRouteParamList,
  typeof PROFILE_SCREEN
>;

function ProfileScreen({navigation}: ScreenProps): React.JSX.Element {
  const userData = useAppSelector(getUserData);
  const dispatch = useAppDispatch();

  const profileAction = (action?: PROFILE_ACTIONS) => {
    if (action === PROFILE_ACTIONS.SIGN_OUT) {
      SignOut(dispatch);
    }
  };

  return (
    <RootContainer>
      <Header title={'PROFILE'} />
      <ScrollView
        contentContainerStyle={ProfileScreenStyle.scrollViewContentContainer}>
        {userData ? (
          <View style={ProfileScreenStyle.userProfileContainer}>
            <View style={ProfileScreenStyle.imageProfileOutsideContainer}>
              <View style={ProfileScreenStyle.imageProfileContainer}>
                <Image
                  style={ProfileScreenStyle.imageProfile}
                  source={{uri: userData.avatar}}
                />
              </View>
            </View>
            <Text
              style={
                ProfileScreenStyle.nameText
              }>{`${userData.first_name} ${userData.last_name}`}</Text>
            <View style={ProfileScreenStyle.extraContainer}>
              <ExtraFeatureContainer
                label={'Vouchers'}
                icon={images.ICON_COUPON}
                quantity={12}
              />
              <ExtraFeatureContainer
                label={'Points'}
                icon={images.ICON_POINT}
                quantity={144}
              />
              <ExtraFeatureContainer label={'QR'} icon={images.ICON_QR} />
            </View>
          </View>
        ) : null}
        <Card style={ProfileScreenStyle.profileItemContainer}>
          <FlatList
            scrollEnabled={false}
            data={PROFILE_MENU}
            ItemSeparatorComponent={() => (
              <View style={ProfileScreenStyle.profileItemSeperator} />
            )}
            renderItem={({item}) => (
              <ProfileItem icon={item.menuIcon} label={item.label} />
            )}
          />
        </Card>
        <Card style={ProfileScreenStyle.profileItemContainer}>
          <FlatList
            scrollEnabled={false}
            data={PROFILE_OTHER_MENU}
            ItemSeparatorComponent={() => (
              <View style={ProfileScreenStyle.profileItemSeperator} />
            )}
            renderItem={({item}) => (
              <ProfileItem
                onPress={() => {
                  profileAction(item.action);
                }}
                icon={item.menuIcon}
                label={item.label}
              />
            )}
          />
        </Card>
        <Text style={ProfileScreenStyle.appsVersionText}>
          {`Apps Version ${getVersion()} (${getBuildNumber()})`}
        </Text>
      </ScrollView>
    </RootContainer>
  );
}

export default ProfileScreen;
