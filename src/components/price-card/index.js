import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';
import { Price } from '../../assets/images';
import { colors } from '../../config/colors';
import { mvs } from '../../config/metrices';
import Bold from '../../typography/bold-text';
import Regular from '../../typography/regular-text';
const PriceCard = ({ style, item, onPress = () => { } }) => {
  return (
    <TouchableOpacity onPress={onPress} style={{ ...styles.main, ...style }}>
      <ImageBackground source={Price} style={styles.price}>
        <View style={styles.circle}></View>
        <Regular label={'$2205.00'} fontSize={mvs(10)} color={colors.white} />
      </ImageBackground>
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <Bold
          style={{}}
          label={'Compliant'}
          color={colors.black}
          fontSize={mvs(14)}
        />
        <Regular label={'$2205.00'} fontSize={mvs(12)} color={colors.lightGray} />
      </View>
    </TouchableOpacity>
  );
};
export default React.memo(PriceCard);
const styles = StyleSheet.create({
  main: {
    backgroundColor: colors.white,
    height: mvs(80),
    paddingVertical: mvs(13),
    paddingHorizontal: mvs(10),
    borderRadius: mvs(5),
  },
  price: {
    position: 'absolute',
    top: mvs(10),
    right: -mvs(10),
    width: mvs(78),
    height: mvs(23),
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: mvs(7),

  },
  circle: {
    height: mvs(8),
    width: mvs(8),
    borderRadius: mvs(1000),
    backgroundColor: colors.white,
    marginRight: mvs(2),
  },
  bottom: {
    backgroundColor: colors.secondary,
    paddingHorizontal: mvs(10),
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.border
  },
  bottomItem: {
    borderRightWidth: StyleSheet.hairlineWidth,
    alignItems: 'center',
    flex: 1,
    paddingVertical: mvs(12),
    paddingHorizontal: mvs(5)
  },
  bottomItemTxt: {
    marginHorizontal: mvs(5),
    color: colors.lightGray,
    fontSize: mvs(12),
  }
});
