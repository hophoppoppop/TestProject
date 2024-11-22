import {
  LOGIN_SCREEN,
  REGISTER_SCREEN,
  WELCOME_SCREEN,
} from '../constants/router';

export type RootStackParamList = {
  [WELCOME_SCREEN]: undefined;
  [LOGIN_SCREEN]: undefined;
  [REGISTER_SCREEN]: undefined;
};
