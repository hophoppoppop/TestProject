import COLORS from '@constants/color';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  rootContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
  },
  mailButton: {
    height: '100%',
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 7,
  },
  mailIcon: {
    width: '100%',
    height: '100%',
  },
  titleContainer: {
    height: '100%',
    aspectRatio: 3,
    marginLeft: 15,
  },
  titleLogo: {
    width: '100%',
    height: '100%',
  },
  recommendationListContentContainer: {
    gap: 10,
    paddingHorizontal: 10,
  },
  listContentContainer: {
    gap: 20,
  },
  scrollViewContentContainer: {
    padding: 20,
  },
  benefitCardContainer: {
    flex: 1,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pointContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  pointImage: {width: 30, height: 30},
  pointText: {
    color: COLORS.BLACK,
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 6,
  },
  otherFunctionContainer: {flexDirection: 'row'},
});
