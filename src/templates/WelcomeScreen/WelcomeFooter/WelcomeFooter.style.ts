import {StyleSheet} from 'react-native';
import COLORS from '../../../constants/color';

export default StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 5,
    backgroundColor: COLORS.BLUE,
  },
  footerText: {
    color: COLORS.WHITE,
    fontWeight: 'bold',
  },
});
