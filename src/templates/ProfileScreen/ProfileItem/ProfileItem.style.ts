import COLORS from '@constants/color';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
  },
  detailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: COLORS.BLUE,
    padding: 10,
  },
  iconImage: {width: '100%', height: '100%'},
  labelText: {color: COLORS.BLACK, fontSize: 14, marginLeft: 15},
  iconChevronContainer: {
    width: 20,
    height: 20,
  },
  iconChevronImage: {width: '100%', height: '100%'},
});
