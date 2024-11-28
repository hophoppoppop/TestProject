import {StyleSheet} from 'react-native';
import COLORS from '../../../constants/color';

export default StyleSheet.create({
  recommendationTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  categoryTitleText: {
    fontWeight: 'bold',
    color: COLORS.BLACK,
    fontSize: 24,
  },
  promoTitleText: {
    marginTop: 20,
    fontWeight: 'bold',
    color: COLORS.BLACK,
    fontSize: 24,
  },
  recommendationButtonContainer: {flexDirection: 'row', alignItems: 'center'},
  recommendationButtonIcon: {
    width: 15,
    height: 15,
    marginLeft: 5,
    marginTop: 2,
  },
});
