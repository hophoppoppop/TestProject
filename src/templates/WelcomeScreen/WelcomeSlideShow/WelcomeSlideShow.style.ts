import COLORS from '@constants/color';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  imageContainer: {
    flex: 0.6,
    width: '80%',
  },
  logoImage: {width: '100%', height: '100%'},
  titleContainer: {
    flex: 0.2,
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 35,
    textAlign: 'center',
    color: COLORS.BLUE,
    fontWeight: 'bold',
  },
  subtitleContainer: {
    flex: 0.2,
  },
  subtitleText: {
    fontSize: 16,
    textAlign: 'center',
  },
  footerContainer: {
    height: 75,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
