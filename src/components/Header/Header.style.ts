import {StyleSheet} from 'react-native';
import COLORS from '../../constants/color';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    paddingVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftContainer: {flex: 0.2},
  middleContainer: {flex: 1},
  rightContainer: {flex: 0.2},
});
