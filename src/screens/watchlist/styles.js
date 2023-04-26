import {StyleSheet} from 'react-native';
import {mvs} from '../../config/metrices';
import {colors} from './../../config/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainerStyle: {
    flex: 1,
    padding: mvs(10),
  },
  body: {
    flex: 1,
    paddingVertical: mvs(12),
    paddingHorizontal: mvs(10),
  },
  menu: {
    marginTop: 30,
    marginRight: 10,
    height: mvs(202),
    backgroundColor: colors.white,
    position: 'absolute',
    top: mvs(40),
    right: mvs(0),
    zIndex: 100,
    width: mvs(270),
    paddingTop: mvs(20),
    elevation: 10,
    paddingHorizontal: mvs(28),
  },
  line: {
    marginVertical: mvs(15),
    height: 1,
    borderWidth: 0.17,
    borderColor: colors.lightGray,
  },
});
export default styles;
