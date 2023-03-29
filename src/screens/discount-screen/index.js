import React from 'react';
import { FlatList, View } from 'react-native';
import CustomHeader from '../../components/atoms/headers/custom-header';
import DiscountCard from '../../components/discount-card';
import { colors } from '../../config/colors';
import styles from './styles';
const Discounts = props => {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <CustomHeader
        title={'RECENT COUPONS'}
        onMenuClick={() => navigation?.toggleDrawer()}
      />
      <View style={styles.body}>
        <FlatList
          nestedScrollEnabled
          contentContainerStyle={styles.contentContainerStyle}
          data={[0, 1, 1]}
          renderItem={({ item, index }) => <DiscountCard style={{}} />}
          keyExtractor={(_, index) => index.toString()}
        />
      </View>
    </View>
  );
};
export default Discounts;
