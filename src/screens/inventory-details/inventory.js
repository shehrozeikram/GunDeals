import React from 'react';
import {View} from 'react-native';
import PriceCard from '../../components/price-card';
import {colors} from '../../config/colors';
import {mvs} from '../../config/metrices';
import Bold from '../../typography/bold-text';
import styles from './styles';
import Regular from '../../typography/regular-text';
const Inventory = ({data = [1, 2, 3, 4, 5], outOfStocks = []}) => {
  console.log('Inventory is ==> ', data);
  return (
    <View style={styles.container}>
      <View style={{...styles.body}}>
        {data?.length > 0 ? (
          <View style={styles.pricesView}>
            {data?.map((item, index) => (
              <PriceCard
                title={item?.store?.title}
                price={item?.price}
                style={{
                  backgroundColor: index % 2 === 1 ? colors.bg : colors.white,
                }}
              />
            ))}
          </View>
        ) : (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              height: mvs(200),
            }}>
            <Bold label={'No Inventory Found'} />
          </View>
        )}

        <Regular
          label={'Out of stocks'}
          style={{marginVertical: mvs(11), marginLeft: mvs(18)}}
        />
        {outOfStocks?.length > 0 ? (
          <View style={styles.pricesView}>
            {outOfStocks?.map((item, index) => (
              <PriceCard
                title={item?.store?.title}
                price={item?.price}
                style={{
                  backgroundColor: index % 2 === 1 ? colors.bg : colors.white,
                }}
              />
            ))}
          </View>
        ) : (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              height: mvs(200),
            }}>
            <Bold label={'No out of stock products'} />
          </View>
        )}
      </View>
    </View>
  );
};
export default Inventory;
