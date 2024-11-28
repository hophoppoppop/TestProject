import COLORS from '@constants/color';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: COLORS.BLUE,
    overflow: 'hidden',
    padding: 5,
    marginHorizontal: 5,
  },
  iconContainer: {
    width: 20,
    height: 20,
  },
  iconImage: {width: '100%', height: '100%'},
  labelContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelText: {color: COLORS.WHITE, fontSize: 10},
});
