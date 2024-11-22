import {StyleSheet} from 'react-native';
import COLORS from '../../../constants/color';

export default StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  logoContainer: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  logoImage: {height: '90%', width: '90%'},
  inputContainer: {
    flex: 0.2,
    justifyContent: 'center',
  },
  authTitle: {
    fontWeight: 'bold',
    fontSize: 60,
    color: COLORS.BLUE,
  },
  authSubTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  authInputContainer: {
    justifyContent: 'center',
  },
  buttonContainer: {flex: 0.3},
  helpText: {
    fontSize: 14,
    marginTop: 10,
    textAlign: 'center',
  },
  redirectText: {
    fontWeight: 'bold',
    color: COLORS.BLUE,
  },
});
