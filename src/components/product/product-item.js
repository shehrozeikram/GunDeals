import React from 'react';
import {Image, ImageBackground, StyleSheet, View} from 'react-native';
import {Rating} from 'react-native-elements';
import {CartIcon, Comment, Watch} from '../../assets/icons';
import {Gun1, Price} from '../../assets/images';
import {colors} from '../../config/colors';
import {mvs} from '../../config/metrices';
import Bold from '../../typography/bold-text';
import Regular from '../../typography/regular-text';
import {Row} from '../atoms/row';
import {IMAGE_URL} from '../../API/urls';
import moment from 'moment';
const ProductItem = ({style, item, index = 0}) => {
  const time = moment(item?.created_at).fromNow();

  return (
    <View style={[styles.main]}>
      <ImageBackground source={Price} style={styles.price}>
        <View style={styles.circle}></View>
        <Regular
          label={'$' + item?.price}
          fontSize={mvs(10)}
          color={colors.white}
        />
      </ImageBackground>
      <View style={[styles.container, style]}>
        <Rating
          showRating={false}
          startingValue={4}
          imageSize={mvs(18)}
          readonly
          style={{alignSelf: 'center'}}
        />
        <Row style={{alignItems: 'center', marginTop: mvs(10)}}>
          <Image
            source={{
              uri: item?.image?.url
                ? `${IMAGE_URL}${item?.image?.url}`
                : item?.image_link,
            }}
            style={{height: mvs(70), width: mvs(103)}}
          />
          <View style={{flex: 1, paddingLeft: mvs(20)}}>
            <Bold
              label={item?.title?.toLocaleLowerCase()}
              color={colors.black}
              fontSize={mvs(11)}
            />
            <Bold
              style={{marginTop: mvs(-3)}}
              label={
                item?.description
                  ? item?.description?.toLocaleLowerCase()
                  : item?.body?.toLocaleLowerCase()
              }
              color={colors.black}
              fontSize={mvs(10)}
              numberOfLines={2}
            />
            <Regular
              label={time + ''}
              style={{marginTop: mvs(10)}}
              color={colors.lightGray}
              fontStyle="italic"
              fontSize={mvs(11)}
            />
          </View>
        </Row>
      </View>
      <View style={{...styles.bottom}}>
        <Row style={{alignItems: 'center'}}>
          <CartIcon />
          <Regular
            label={'KyGunCo'}
            fontSize={mvs(10)}
            color={colors.lightGray}
            style={{marginLeft: mvs(10)}}
          />
        </Row>
        <Row style={{alignItems: 'center', marginLeft: mvs(-10)}}>
          <Row style={{alignItems: 'center', marginHorizontal: mvs(10)}}>
            <Watch />
            <Regular
              label={'Watch'}
              fontSize={mvs(10)}
              color={colors.lightGray}
              style={{marginLeft: mvs(7)}}
            />
          </Row>
          <Row style={{alignItems: 'center'}}>
            <Comment />
            <Regular
              label={item?.total_comments ? item?.total_comments + '' : '0'}
              fontSize={mvs(10)}
              color={colors.lightGray}
              style={{marginLeft: mvs(7)}}
            />
          </Row>
        </Row>
      </View>
    </View>
  );
};
export default React.memo(ProductItem);
const styles = StyleSheet.create({
  main: {
    //height: mvs(200),
    ...colors.shadow,
    elevation: mvs(2),
    marginTop: mvs(10),
    padding: mvs(1),
  },
  container: {
    backgroundColor: colors.white,
    paddingTop: mvs(18),
    paddingBottom: mvs(14),
    paddingHorizontal: mvs(12),
    borderWidth: mvs(0.8),
    borderColor: colors.lightGray,
    borderBottomWidth: 0,
  },
  price: {
    width: mvs(78),
    height: mvs(23),
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: mvs(6),
    right: mvs(-8),
    zIndex: 1,
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
    backgroundColor: '#EDF0F2',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: mvs(10),
    paddingVertical: mvs(3),
    elevation: 1,
    borderBottomWidth: 0.5,
    borderColor: colors.lightGray,
  },
});
