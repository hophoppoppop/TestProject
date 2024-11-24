import {
  DRAWER_SCREEN,
  HOME_SCREEN,
  LOGIN_SCREEN,
  REGISTER_SCREEN,
  WELCOME_SCREEN,
} from '../constants/router';

export type RootRouteParamList = {
  [WELCOME_SCREEN]: undefined;
  [LOGIN_SCREEN]: undefined;
  [REGISTER_SCREEN]: undefined;
  [DRAWER_SCREEN]: undefined;
  [HOME_SCREEN]: undefined;
};
