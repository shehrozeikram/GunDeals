import {useFocusEffect} from '@react-navigation/native';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import {BASE_URL} from '../../API/urls';
import EmptyView from '../../components/EmptyView/empty-view';
import {Loader} from '../../components/atoms/loader';
import ProductItem from '../../components/product/product-item';
import {mvs} from '../../config/metrices';
import styles from './styles';
import Bold from '../../typography/bold-text';

const Deals = ({list = []}) => {
  console.log('List is ===> ', list);
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        {list?.length > 0 ? (
          <FlatList
            key="categoryList"
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: mvs(40),
              marginTop: mvs(5),
              paddingHorizontal: mvs(10),
            }}
            data={list}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() =>
                  props?.navigation?.navigate('ProductDetails', {id: item?.id})
                }>
                <ProductItem item={item} />
              </TouchableOpacity>
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
            <Bold label={'No Deals Found'} />
          </View>
        )}
      </View>
    </View>
  );
};
export default Deals;
