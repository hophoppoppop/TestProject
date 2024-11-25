import {StyleSheet} from 'react-native';
import COLORS from '../../constants/color';

export default StyleSheet.create({
  rootContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
  },
  mailButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 7,
  },
  mailIcon: {
    flex: 1,
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
    paddingVertical: 10,
  },
  scrollViewContentContainer: {
    padding: 20,
  },
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
