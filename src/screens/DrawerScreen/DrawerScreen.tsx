import React from 'react';
import RootContainer from '../../templates/Common/RootContainer/RootContainer';
import {RootRouteParamList} from '../../types/router';
import {HOME_SCREEN, LOGIN_SCREEN} from '../../constants/router';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {getToken, getUserData} from '../../redux/slices/user';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import {
  Alert,
  Image,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import images from '../../assets/images';
import DrawerScreenStyle from './DrawerScreen.style';
import DrawerButton from '../../components/DrawerButton/DrawerButton';
import COLORS from '../../constants/color';
import ExtraFeatureContainer from '../../templates/DrawerScreen/ExtraFeatureContainer/ExtraFeatureContainer';
import {apiCall} from '../../helpers/api';
import {HTTP_METHOD} from '../../types/api';
import {ENDPOINTS} from '../../constants/api';
import {hideLoading, showLoading} from '../../redux/slices/appState';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ASYNCSTORAGE_KEY} from '../../constants/asyncstorage';

function DrawerScreen(props: DrawerContentComponentProps): React.JSX.Element {
  const userData = useAppSelector(getUserData);
  const dispatch = useAppDispatch();

  return (
    <DrawerContentScrollView {...props}>
      {userData ? (
        <View style={DrawerScreenStyle.userProfileContainer}>
          <View style={DrawerScreenStyle.imageProfileOutsideContainer}>
            <View style={DrawerScreenStyle.imageProfileContainer}>
              <Image
                style={DrawerScreenStyle.imageProfile}
                source={{uri: userData.avatar}}
              />
            </View>
          </View>
          <Text
            style={
              DrawerScreenStyle.nameText
            }>{`${userData.first_name} ${userData.last_name}`}</Text>
          <View style={DrawerScreenStyle.extraContainer}>
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
      <DrawerButton
        {...props}
        keyRoute={HOME_SCREEN}
        label={'Home'}
        unhighlightedIcon={images.ICON_HOME_UNHIGHLIGHTED}
        highlightedIcon={images.ICON_HOME_HIGHLIGHTED}
      />
      <DrawerButton
        {...props}
        unfocusable
        label={'Logout'}
        icon={images.ICON_SIGNOUT}
        onPress={() => {
          Alert.alert('SIGN OUT', 'Do you want to sign out?', [
            {
              text: 'Cancel',
              style: 'cancel',
            },
            {
              text: 'OK',
              onPress: () => {
                dispatch(showLoading());
                apiCall({method: HTTP_METHOD.POST, endpoints: ENDPOINTS.LOGOUT})
                  .then(() => {
                    AsyncStorage.removeItem(ASYNCSTORAGE_KEY.USER_TOKEN);
                    props.navigation.reset({
                      routes: [{name: LOGIN_SCREEN}],
                    });
                  })
                  .catch(reason => {
                    ToastAndroid.showWithGravity(
                      reason.error ||
                        'Connection error, please try again later!',
                      ToastAndroid.LONG,
                      20,
                    );
                  })
                  .finally(() => {
                    dispatch(hideLoading());
                  });
              },
            },
          ]);
        }}
      />
    </DrawerContentScrollView>
  );
}

export default DrawerScreen;
