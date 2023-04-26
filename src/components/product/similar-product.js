import React from 'react';
import {Image, ImageBackground, StyleSheet, View} from 'react-native';
import {Rating} from 'react-native-elements';
import {Active, CartIcon, Comment, Watch} from '../../assets/icons';
import {Gun1, Gun2, Price} from '../../assets/images';
import {colors} from '../../config/colors';
import {mvs} from '../../config/metrices';
import Bold from '../../typography/bold-text';
import Regular from '../../typography/regular-text';
import {Row} from '../atoms/row';
import {BASE_URL, IMAGE_URL} from '../../API/urls';
import moment from 'moment';
const SimilarProduct = ({style, item}) => {
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
      <Image
        source={{uri: `${IMAGE_URL}${item?.image?.url}`}}
        style={{height: mvs(65), width: mvs(120), marginVertical: mvs(10)}}
      />
      <View style={{marginTop: mvs(10)}}>
        <Row style={{justifyContent: 'flex-start'}}>
          <Active />
          <Bold
            label={' ' + item?.title}
            style={{marginTop: mvs(-3)}}
            numberOfLines={1}
          />
        </Row>
        <Bold label={'MPN: ' + item?.mpn} fontSize={mvs(12)} />
        <Bold label={'Brand: ' + item?.brand} fontSize={mvs(12)} />

        <Bold label={'Caliber: ' + item?.caliber} fontSize={mvs(12)} />

        <Bold label={'Capacity: ' + item?.capacity} fontSize={mvs(12)} />
      </View>
    </View>
  );
};
export default React.memo(SimilarProduct);
const styles = StyleSheet.create({
  main: {
    //height: mvs(200),
    ...colors.shadow,
    elevation: mvs(2),
    marginHorizontal: mvs(10),
    padding: mvs(1),
    height: mvs(287),
    backgroundColor: colors.white,
    paddingHorizontal: mvs(10),
    width: mvs(200),
    borderWidth: 0.5,
    borderColor: colors.lightGray,
  },
  price: {
    width: mvs(78),
    height: mvs(23),
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: mvs(7),
    marginVertical: mvs(10),
    alignSelf: 'flex-end',
    marginRight: mvs(-10),
  },
  image: {
    height: mvs(65),
    width: mvs(120),
    marginVertical: mvs(10),
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
