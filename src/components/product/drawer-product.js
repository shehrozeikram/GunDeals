import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {Gun1} from '../../assets/images';
import {colors} from '../../config/colors';
import {mvs} from '../../config/metrices';
import Bold from '../../typography/bold-text';
import Regular from '../../typography/regular-text';
import {Row} from '../atoms/row';
const DrawerProduct = ({style, item, onPress = () => {}}) => {
  return (
    <TouchableOpacity onPress={onPress} style={{...styles.main}}>
      <View style={styles.image}>
        <Image source={Gun1} style={{height: mvs(45), width: mvs(65)}} />
      </View>
      <View style={{flex: 1, paddingHorizontal: mvs(20)}}>
        <Row style={{justifyContent: 'flex-start', alignItems: 'center'}}>
          <View style={styles.green}></View>
          <Bold
            label={'AK-47'}
            style={{marginLeft: mvs(10)}}
            fontSize={mvs(16)}
            color={colors.black}
          />
        </Row>
        <Bold
          label={'Desert Tech m...'}
          style={{marginTop: mvs(3)}}
          fontSize={mvs(12)}
          color={colors.black}
        />
        <Bold
          label={'Caliber: 7.62x39mm'}
          style={{marginTop: mvs(3)}}
          fontSize={mvs(12)}
          color={colors.black}
        />
        <Bold
          label={'AKfrom: $649.99'}
          style={{marginTop: mvs(3)}}
          fontSize={mvs(12)}
          color={colors.black}
        />
      </View>
    </TouchableOpacity>
  );
};
export default React.memo(DrawerProduct);
const styles = StyleSheet.create({
  main: {
    //height: mvs(200),
    ...colors.shadow,
    elevation: mvs(2),
    marginTop: mvs(15),
    padding: mvs(1),
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    height: mvs(102),
    width: mvs(122),
  },
  green: {
    width: mvs(10),
    height: mvs(10),
    backgroundColor: 'green',
    borderRadius: 1000,
  },
});
