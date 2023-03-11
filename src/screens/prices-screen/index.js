import React from 'react';
import { FlatList, View } from 'react-native';
import PriceCard from '../../components/price-card';
import { colors } from '../../config/colors';
import styles from './styles';
const Prices = props => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <FlatList
          contentContainerStyle={styles.contentContainerStyle}
          data={[0, 1, 1]}
          renderItem={({ item, index }) => (
            <PriceCard style={{ backgroundColor: index % 2 === 1 ? colors.bg : colors.white }} />
          )}
          keyExtractor={(_, index) => index.toString()}
        />
      </View>
    </View>
  );
};
export default Prices;
