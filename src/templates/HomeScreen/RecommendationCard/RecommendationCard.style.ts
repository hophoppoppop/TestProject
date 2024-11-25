import {StyleSheet} from 'react-native';
import COLORS from '../../../constants/color';

export default StyleSheet.create({
  cardContainer: {
    height: 120,
    width: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  imageBackgroundContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 5,
  },
  detailCardContainer: {flex: 0.6, justifyContent: 'flex-end', padding: 5},
  detailNameText: {
    fontWeight: 'bold',
    color: COLORS.WHITE,
    marginLeft: 5,
  },
  imageContainer: {flex: 0.4, height: 150},
  itemImage: {width: '100%', height: '100%'},
});
