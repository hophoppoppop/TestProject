import React from 'react';
import RootContainer from '../../templates/Common/RootContainer/RootContainer';
import {RootRouteParamList} from '../../types/router';
import {HOME_SCREEN} from '../../constants/router';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {getToken} from '../../redux/slices/user';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import {Image} from 'react-native';
import images from '../../assets/images';
import DrawerScreenStyle from './DrawerScreen.style';
import DrawerButton from '../../components/DrawerButton/DrawerButton';

function DrawerScreen(props: DrawerContentComponentProps): React.JSX.Element {
  const userToken = useAppSelector(getToken);
  const dispatch = useAppDispatch();

  return (
    <DrawerContentScrollView {...props}>
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
      />
    </DrawerContentScrollView>
  );
}

export default DrawerScreen;
