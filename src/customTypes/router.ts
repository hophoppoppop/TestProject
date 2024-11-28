import {
  HOME_SCREEN,
  LOGIN_SCREEN,
  PROFILE_SCREEN,
  PROMOS_SCREEN,
  REGISTER_SCREEN,
  TAB_SCREEN,
  WELCOME_SCREEN,
} from '@constants/router';

export type RootRouteParamList = {
  [WELCOME_SCREEN]: undefined;
  [LOGIN_SCREEN]: undefined;
  [REGISTER_SCREEN]: undefined;
  [TAB_SCREEN]: undefined;
  [HOME_SCREEN]: undefined;
  [PROFILE_SCREEN]: undefined;
  [PROMOS_SCREEN]: undefined;
};
