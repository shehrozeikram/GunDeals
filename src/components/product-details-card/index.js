import React from 'react';
import {Image, ImageBackground, StyleSheet, View} from 'react-native';
import {Rating} from 'react-native-elements';
import {Like, UnLike, Watch} from '../../assets/icons';
import {Gun1, Price} from '../../assets/images';
import {colors} from '../../config/colors';
import {mvs} from '../../config/metrices';
import Bold from '../../typography/bold-text';
import Medium from '../../typography/medium-text';
import Regular from '../../typography/regular-text';
import {Row} from '../atoms/row';
import moment from 'moment';
import {IMAGE_URL} from '../../API/urls';
const ProductDetailsCard = ({style, item, onPress = () => {}}) => {
  const time = moment(item?.created_at).fromNow();
  return (
    <View style={{...styles.main, ...style}}>
      <View
        style={{
          margin: mvs(20),
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: colors.white,
          padding: mvs(20),
        }}>
        <Image
          source={{uri: `${IMAGE_URL}${item?.image?.url}`}}
          style={{height: mvs(160), width: '80%'}}
        />
      </View>
      <Row style={{paddingHorizontal: mvs(20), marginBottom: mvs(20)}}>
        <Medium label={time + ''} color={colors.lightGray} />
        <Medium label={`Seller: Sportmans's guide`} color={colors.lightGray} />
      </Row>
      <Row style={{...styles.bottom}}>
        <Row style={styles.bottomItem}>
          <Like />
          <Regular label={'5 votes'} style={styles.bottomItemTxt} />
        </Row>
        <Row style={styles.bottomItem}>
          <UnLike />
          <Regular label={'5 votes'} style={styles.bottomItemTxt} />
        </Row>
        <Row style={styles.bottomItem}>
          <Watch />
          <Regular label={'Watch'} style={styles.bottomItemTxt} />
        </Row>
        <Row style={[styles.bottomItem, {borderRightWidth: 0}]}>
          <Watch />
          <Regular label={'Share'} style={styles.bottomItemTxt} />
        </Row>
      </Row>
      <View style={{backgroundColor: colors.white, padding: mvs(20)}}>
        <Row style={{alignItems: 'center'}}>
          <Row>
            <Rating
              showRating={false}
              startingValue={4}
              imageSize={mvs(18)}
              readonly
              style={{alignItems: 'flex-start'}}
            />
            <Regular
              label={'( 2 votes )'}
              style={{marginHorizontal: mvs(10)}}
              color={colors.lightGray}
            />
          </Row>
          <ImageBackground source={Price} style={styles.price}>
            <View style={styles.circle}></View>
            <Regular
              label={'$' + item?.price}
              fontSize={mvs(10)}
              color={colors.white}
            />
          </ImageBackground>
        </Row>
        <Bold
          style={{marginTop: mvs(10)}}
          label={item?.title}
          numberOfLines={2}
          color={colors.black}
          fontSize={mvs(15)}
        />
      </View>
    </View>
  );
};
export default React.memo(ProductDetailsCard);
const styles = StyleSheet.create({
  main: {
    backgroundColor: colors.bg,
  },
  container: {
    // paddingTop: mvs(18),
    // paddingBottom: mvs(14),
    // paddingHorizontal: mvs(12),
  },
  price: {
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
    marginHorizontal: mvs(7),
    color: colors.lightGray,
    fontSize: mvs(11),
  },
});
