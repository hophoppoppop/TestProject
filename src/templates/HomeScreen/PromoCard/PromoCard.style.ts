import {StyleSheet} from 'react-native';
import COLORS from '../../../constants/color';

export default StyleSheet.create({
  cardContainer: {
    flex: 1,
    borderRadius: 10,
    flexDirection: 'row',
    marginHorizontal: 5,
  },
  detailCardContainer: {flex: 0.6, justifyContent: 'flex-end', padding: 5},
  detailNameText: {
    fontWeight: 'bold',
    color: COLORS.WHITE,
    marginLeft: 5,
  },

  dateText: {
    fontWeight: 'bold',
    color: COLORS.WHITE,
    marginLeft: 5,
  },
  imageContainer: {flex: 0.4, height: 150},
  itemImage: {width: '100%', height: '100%'},
});
