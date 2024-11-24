import {createNavigationContainerRef} from '@react-navigation/native';
import {RootRouteParamList} from '../types/router';

export const navigationRef = createNavigationContainerRef<RootRouteParamList>();

export function navigate(name: keyof RootRouteParamList, params?: any) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}
export function reset(name: keyof RootRouteParamList, params?: any) {
  if (navigationRef.isReady()) {
    navigationRef.reset({
      routes: [
        {
          name,
          params,
        },
      ],
    });
  }
}
