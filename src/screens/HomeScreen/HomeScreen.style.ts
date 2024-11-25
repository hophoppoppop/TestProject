import {StyleSheet} from 'react-native';
import COLORS from '../../constants/color';

export default StyleSheet.create({
  rootContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
  },
  drawerButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  drawerIcon: {
    flex: 1,
  },
  titleContainer: {
    height: '100%',
    aspectRatio: 3,
    alignSelf: 'flex-end',
    marginRight: 20,
  },
  titleLogo: {
    width: '100%',
    height: '100%',
  },
  listContentContainer: {
    gap: 20,
    padding: 20,
  },
  cardContainer: {
    flex: 1,
    borderRadius: 10,
    flexDirection: 'row',
    overflow: 'hidden',
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
