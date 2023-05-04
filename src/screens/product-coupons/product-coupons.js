import React from 'react';
import {FlatList, View} from 'react-native';
import DiscountCard from '../../components/discount-card';
import styles from './styles';
const ProductCoupons = ({productId}) => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <FlatList
          nestedScrollEnabled
          contentContainerStyle={styles.contentContainerStyle}
          data={[0, 1, 1]}
          renderItem={({item, index}) => <DiscountCard style={{}} />}
          keyExtractor={(_, index) => index.toString()}
        />
      </View>
    </View>
  );
};
export default ProductCoupons;
