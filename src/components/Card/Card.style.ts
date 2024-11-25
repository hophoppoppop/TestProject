import {StyleSheet} from 'react-native';
import COLORS from '../../constants/color';

export default StyleSheet.create({
  container: {
    backgroundColor: COLORS.WHITE,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    borderRadius: 5,
    overflow: 'hidden',
  },
});
