import React from 'react';
import { FlatList, View } from 'react-native';
import PriceCard from '../../components/price-card';
import { colors } from '../../config/colors';
import styles from './styles';
const Prices = props => {
  return (
    <FlatList
      nestedScrollEnabled
      contentContainerStyle={styles.contentContainerStyle}
      data={[{}, {}, {}]}
      renderItem={({ item, index }) => (
        <PriceCard style={{ backgroundColor: index % 2 === 1 ? colors.bg : colors.white }} />
      )}
      keyExtractor={(_, index) => index.toString()}
    />
  );
};
export default Prices;
