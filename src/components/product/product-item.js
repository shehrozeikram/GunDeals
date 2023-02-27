import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  CartIcon,
  Comment,
  MenuSearch,
  Stand,
  ThreeLinesMenu,
  Watch,
} from '../../assets/icons';
import {Gun1, HeaderBg, Price} from '../../assets/images';
import {colors} from '../../config/colors';
import {mvs} from '../../config/metrices';
import Bold from '../../typography/bold-text';
import Regular from '../../typography/regular-text';
import {Rating} from 'react-native-elements';
import {Row} from '../atoms/row';
const ProductItem = ({style, item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity style={{...styles.main}}>
      <ImageBackground source={Price} style={styles.price}>
        <View style={styles.circle}></View>
        <Regular label={'$2205.00'} fontSize={mvs(10)} color={colors.white} />
      </ImageBackground>
      <View style={{...styles.container, ...style}}>
        <Rating
          showRating={false}
          startingValue={4}
          imageSize={mvs(18)}
          readonly
          style={{alignSelf: 'center'}}
        />
        <Row style={{alignItems: 'center', marginTop: mvs(10)}}>
          <Image source={Gun1} style={{height: mvs(65), width: mvs(83)}} />
          <View style={{flex: 1, paddingLeft: mvs(20)}}>
            <Bold
              label={'DESERT TEch mdrx se * ca'.toUpperCase()}
              color={colors.black}
              fontSize={mvs(13)}
            />
            <Bold
              style={{marginTop: mvs(10)}}
              label={'Compliant 5.56X45mm NATO 20” 10+1 Black - $2205 (Add To Cart)'.toUpperCase()}
              color={colors.black}
              fontSize={mvs(13)}
            />
            <Regular
              label={'2 weeks ago'}
              style={{marginTop: mvs(10)}}
              color={colors.lightGray}
              fontStyle="italic"
            />
          </View>
        </Row>
      </View>
      <View style={{...styles.bottom}}>
        <Row style={{alignItems: 'center'}}>
          <CartIcon />
          <Regular
            label={'KyGunCo'}
            fontSize={mvs(12)}
            color={colors.lightGray}
            style={{marginLeft: mvs(10)}}
          />
        </Row>
        <Row style={{alignItems: 'center', marginLeft: mvs(-10)}}>
          <Row style={{alignItems: 'center', marginHorizontal: mvs(10)}}>
            <Watch />
            <Regular
              label={'Watch'}
              fontSize={mvs(12)}
              color={colors.lightGray}
              style={{marginLeft: mvs(7)}}
            />
          </Row>
          <Row style={{alignItems: 'center'}}>
            <Comment />
            <Regular
              label={'4'}
              fontSize={mvs(12)}
              color={colors.lightGray}
              style={{marginLeft: mvs(7)}}
            />
          </Row>
        </Row>
      </View>
    </TouchableOpacity>
  );
};
export default React.memo(ProductItem);
const styles = StyleSheet.create({
  main: {
    //height: mvs(200),
    ...colors.shadow,
    elevation: mvs(2),
    marginTop: mvs(15),
    padding: mvs(1),
  },
  container: {
    backgroundColor: colors.white,
    paddingTop: mvs(18),
    paddingBottom: mvs(14),
    paddingHorizontal: mvs(12),
    borderWidth: mvs(0.1),
    borderColor: colors.lightGray,
  },
  price: {
    width: mvs(78),
    height: mvs(23),
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: mvs(6),
    right: mvs(1),
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
    backgroundColor: colors.backgroundColor,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: mvs(10),
    paddingVertical: mvs(13),
  },
});
