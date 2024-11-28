import COLORS from '@constants/color';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 10,
  },
  disabledButton: {
    backgroundColor: COLORS.GREY,
  },
  enabledButton: {
    backgroundColor: COLORS.BLUE,
  },
  buttonText: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  disabledText: {
    color: COLORS.GRAY,
  },
  enabledText: {
    color: COLORS.WHITE,
  },
});
