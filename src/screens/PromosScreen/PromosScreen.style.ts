import COLORS from '@constants/color';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  rootContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
  },
  mailButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 7,
  },
  mailIcon: {
    flex: 1,
  },
  titleContainer: {
    height: '100%',
    aspectRatio: 3,
    marginLeft: 15,
  },
  titleLogo: {
    width: '100%',
    height: '100%',
  },
  listContentContainer: {
    gap: 20,
    padding: 20,
  },
});
