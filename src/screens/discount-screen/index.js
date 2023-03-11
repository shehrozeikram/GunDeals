import React from 'react';
import { FlatList, View } from 'react-native';
import DiscountCard from '../../components/discount-card';
import { colors } from '../../config/colors';
import styles from './styles';
const Discounts = props => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <FlatList
          contentContainerStyle={styles.contentContainerStyle}
          data={[0, 1, 1]}
          renderItem={({ item, index }) => (
            <DiscountCard style={{}} />
          )}
          keyExtractor={(_, index) => index.toString()}
        />
      </View>
    </View>
  );
};
export default Discounts;
