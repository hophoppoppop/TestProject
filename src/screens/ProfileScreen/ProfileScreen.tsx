import images from '@assets/images';
import Card from '@components/Card/Card';
import Header from '@components/Header/Header';
import {PROFILE_MENU, PROFILE_OTHER_MENU} from '@constants/profile';
import {PROFILE_SCREEN} from '@constants/router';
import {PROFILE_ACTIONS} from '@customTypes/profile';
import {RootRouteParamList} from '@customTypes/router';
import {skeletonLoading} from '@helpers/layout';
import {SignOut} from '@helpers/user';
import {useAppDispatch, useAppSelector} from '@hooks/redux';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {getUserData} from '@redux/slices/user';
import BenefitSkeleton from '@skeletons/ProfileScreen/BenefitSkeleton';
import ProfileSkeleton from '@skeletons/ProfileScreen/ProfileSkeleton';
import RootContainer from '@templates/Common/RootContainer/RootContainer';
import ExtraFeatureContainer from '@templates/DrawerScreen/ExtraFeatureContainer/ExtraFeatureContainer';
import ProfileItem from '@templates/ProfileScreen/ProfileItem/ProfileItem';
import React from 'react';
import {FlatList, Image, ScrollView, Text, View} from 'react-native';
import {getBuildNumber, getVersion} from 'react-native-device-info';

import ProfileScreenStyle from './ProfileScreen.style';

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
        <View style={ProfileScreenStyle.userProfileContainer}>
          <View style={ProfileScreenStyle.imageProfileOutsideContainer}>
            <View style={ProfileScreenStyle.imageProfileContainer}>
              {skeletonLoading(
                {
                  content: (
                    <Image
                      style={ProfileScreenStyle.imageProfile}
                      source={{uri: userData?.avatar}}
                    />
                  ),
                  skeletonContent: <ProfileSkeleton />,
                },
                userData === undefined,
              )}
            </View>
          </View>
          {skeletonLoading(
            {
              content: (
                <>
                  <Text
                    style={
                      ProfileScreenStyle.nameText
                    }>{`${userData?.first_name} ${userData?.last_name}`}</Text>
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
                </>
              ),
              skeletonContent: <BenefitSkeleton />,
            },
            userData === undefined,
          )}
        </View>
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
