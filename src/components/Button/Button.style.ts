import {StyleSheet} from 'react-native';
import COLORS from '../../constants/color';

export default StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 40,
    backgroundColor: COLORS.BLUE,
  },
  buttonText: {
    color: COLORS.WHITE,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
