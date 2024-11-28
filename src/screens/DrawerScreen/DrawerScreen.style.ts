import COLORS from '@constants/color';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  userProfileContainer: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    backgroundColor: COLORS.BLUE,
    marginTop: 50,
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  imageProfileOutsideContainer: {
    position: 'absolute',
    top: -50,
    width: 90,
    height: 90,
    borderRadius: 90,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.WHITE,
  },
  imageProfileContainer: {
    width: 80,
    height: 80,
    borderRadius: 80,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageProfile: {
    width: '100%',
    height: '100%',
  },
  nameText: {
    fontWeight: 'bold',
    fontSize: 24,
    color: COLORS.WHITE,
  },
  extraContainer: {
    flexDirection: 'row',
    marginTop: 10,
    borderTopWidth: 1,
    borderColor: COLORS.WHITE,
    paddingVertical: 10,
  },
  drawerButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  drawerIcon: {
    flex: 1,
  },
});
