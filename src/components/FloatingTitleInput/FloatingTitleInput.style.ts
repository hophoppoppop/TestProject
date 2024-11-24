import {StyleSheet} from 'react-native';
import COLORS from '../../constants/color';

export default StyleSheet.create({
  container: {
    marginTop: 25,
    marginBottom: 5,
    paddingHorizontal: 10,
    backgroundColor: COLORS.LIGHT_BLUE,
    borderRadius: 10,
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    paddingHorizontal: 10,
    position: 'absolute',
    fontWeight: 'bold',
    backgroundColor: COLORS.LIGHT_BLUE,
    borderRadius: 5,
  },
  imageLeft: {
    width: 25,
    height: 25,
    marginLeft: 10,
  },
  secureImage: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  errorText: {
    color: COLORS.RED,
  },
});
