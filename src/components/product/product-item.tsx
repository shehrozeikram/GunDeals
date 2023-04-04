import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewToken
} from 'react-native';
import {CartIcon, Comment, Watch} from '../../assets/icons';
import {Gun1, HeaderBg, Price} from '../../assets/images';
import {colors} from '../../config/colors';
import {mvs} from '../../config/metrices';
import Bold from '../../typography/bold-text';
import Regular from '../../typography/regular-text';
import {Rating} from 'react-native-elements';
import {Row} from '../atoms/row';
import Animated, {useAnimatedStyle, withTiming,useSharedValue} from 'react-native-reanimated';
type ListItemProps = {
  viewableItems: Animated.SharedValue<ViewToken[]>;
  item: {
    id: number;
  };
  style:undefined
};
const ProductItem: React.FC<ListItemProps> = ({style, item, viewableItems}) => {
  const rStyle = useAnimatedStyle(() => {
    const isVisible = Boolean(
      viewableItems.value
        ?.filter(item => item.isViewable)
        .find(viewableItem => viewableItem.item?.id === item?.id),
    );

    return {
      opacity: withTiming(isVisible ? 1 : 0),
      transform: [
        {
          scale: withTiming(isVisible ? 1 : 0.6),
        },
      ],
    };
  }, []);
  return (
    <Animated.View style={[styles.main, rStyle]}>
      <ImageBackground source={Price} style={styles.price}>
        <View style={styles.circle}></View>
        <Regular label={'$2205.00'} fontSize={mvs(10)} color={colors.white} />
      </ImageBackground>
      <View style={[styles.container,style]}>
        <Rating
          showRating={false}
          startingValue={4}
          imageSize={mvs(18)}
          readonly
          style={{alignSelf: 'center'}}
        />
        <Row style={{alignItems: 'center', marginTop: mvs(10)}}>
          <Image source={Gun1} style={{height: mvs(70), width: mvs(103)}} />
          <View style={{flex: 1, paddingLeft: mvs(20)}}>
            <Bold
              label={'Deseret tech mdrx se * ca'.toLocaleLowerCase()}
              color={colors.black}
              fontSize={mvs(11)}
            />
            <Bold
              style={{marginTop: mvs(-3)}}
              label={'Compliant 5.56X45mm NATO 20” 10+1 Black-$2205 (Add To Cart)'.toLocaleLowerCase()}
              color={colors.black}
              fontSize={mvs(10)}
            />
            <Regular
              label={'2 weeks ago'}
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
              label={'4'}
              fontSize={mvs(10)}
              color={colors.lightGray}
              style={{marginLeft: mvs(7)}}
            />
          </Row>
        </Row>
      </View>
    </Animated.View>
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
