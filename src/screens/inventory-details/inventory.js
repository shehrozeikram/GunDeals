import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import {BASE_URL} from '../../API/urls';
import EmptyView from '../../components/EmptyView/empty-view';
import {Loader} from '../../components/atoms/loader';
import ProductItem from '../../components/product/product-item';
import {mvs} from '../../config/metrices';
import styles from './styles';
import PriceCard from '../../components/price-card';
import {colors} from '../../config/colors';
const Inventory = ({data = [1, 2, 3, 4, 5]}) => {
  return (
    <View style={styles.container}>
      <View style={{...styles.body}}>
        {data?.length > 0 ? (
          <FlatList
            key="categoryList"
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: mvs(40),
              marginTop: mvs(15),
              paddingHorizontal: mvs(15),
            }}
            data={data}
            renderItem={({item, index}) => (
              <PriceCard
                style={{
                  backgroundColor: index % 2 === 1 ? colors.bg : colors.white,
                }}
              />
            )}
          />
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
      </View>
    </View>
  );
};
export default Inventory;
