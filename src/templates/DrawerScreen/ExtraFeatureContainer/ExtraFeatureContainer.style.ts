import COLORS from '@constants/color';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  extraSubContainer: {flex: 1, alignItems: 'center', paddingHorizontal: 10},
  subTitle: {fontWeight: 'bold', color: COLORS.WHITE},
  subIconContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
  },
  iconImage: {width: 30, height: 30},
  quantityText: {
    marginLeft: 10,
    fontWeight: 'bold',
    color: COLORS.WHITE,
  },
});
