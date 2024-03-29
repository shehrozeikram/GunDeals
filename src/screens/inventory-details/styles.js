import {StyleSheet} from 'react-native';
import {mvs} from '../../config/metrices';
import {colors} from '../../config/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.F5F5F6,
  },
  contentContainerStyle: {
    flex: 1,
    padding: mvs(20),
  },
  body: {
    backgroundColor: colors.F5F5F6,
    paddingTop: mvs(20),
  },
  descriptionView: {
    flex: 1,
    backgroundColor: colors.white,
    padding: mvs(20),
  },
  div: {
    height: 1.4,
    backgroundColor: colors.lightGray,
    marginHorizontal: mvs(0),
  },
  image: {
    margin: mvs(20),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: mvs(20),
  },
  btn: {
    backgroundColor: colors.primary,
    paddingHorizontal: mvs(50),
    borderRadius: mvs(10),
    paddingVertical: mvs(15),
    alignSelf: 'center',
  },
  bottom: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    paddingVertical: mvs(15),
    backgroundColor: colors.white,
  },
  active: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: mvs(10),
    borderTopWidth: 0.6,
    borderTopColor: colors.lightGray,
  },
  inactive: {
    flex: 1,
    backgroundColor: '#E4E8EB',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: mvs(10),
    borderWidth: 0.6,
    borderColor: colors.lightGray,
  },
  pricesView: {
    marginHorizontal: mvs(15),
    //paddingBottom: mvs(15),
    borderWidth: 0.8,
    borderColor: colors.lightGray,
  },
});
export default styles;
