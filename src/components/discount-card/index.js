import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Discount} from '../../assets/icons';
import {colors} from '../../config/colors';
import {mvs} from '../../config/metrices';
import Bold from '../../typography/bold-text';
import Regular from '../../typography/regular-text';
import {Row} from '../atoms/row';
const DiscountCard = ({style, item, onPress = () => {}}) => {
  return (
    <TouchableOpacity onPress={onPress} style={{...styles.main, ...style}}>
      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <Row>
          <Row>
            <Regular
              style={{fontStyle: 'italic'}}
              label={'Coupon:'}
              fontSize={mvs(12)}
              color={colors.lightGray}
            />
            <Regular
              style={{fontStyle: 'italic', textTransform: 'uppercase'}}
              label={'ULTIMATE20'}
              fontSize={mvs(12)}
              color={colors.lightGray}
            />
          </Row>
          <Row>
            <Regular
              style={{fontStyle: 'italic'}}
              label={'Coupon:'}
              fontSize={mvs(12)}
              color={colors.lightGray}
            />
            <Regular
              style={{fontStyle: 'italic', textTransform: 'uppercase'}}
              label={`Sportsman’s Guide`}
              fontSize={mvs(12)}
              color={colors.lightGray}
            />
          </Row>
        </Row>

        <Bold
          style={{}}
          label={'$20 off $100 sitewide (Excludes Ammo)'}
          color={colors.black}
          fontSize={mvs(16)}
        />
      </View>
      <Discount
        style={{position: 'absolute', right: -mvs(10), bottom: -mvs(10)}}
      />
    </TouchableOpacity>
  );
};
export default React.memo(DiscountCard);
const styles = StyleSheet.create({
  main: {
    backgroundColor: colors.white,
    height: mvs(91),
    paddingVertical: mvs(13),
    paddingHorizontal: mvs(10),
    borderRadius: mvs(5),
    marginBottom: mvs(15),
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
    borderColor: colors.border,
  },
  bottomItem: {
    borderRightWidth: StyleSheet.hairlineWidth,
    alignItems: 'center',
    flex: 1,
    paddingVertical: mvs(12),
    paddingHorizontal: mvs(5),
  },
  bottomItemTxt: {
    marginHorizontal: mvs(5),
    color: colors.lightGray,
    fontSize: mvs(12),
  },
});
