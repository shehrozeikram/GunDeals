import React, {useState} from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';

import {useFocusEffect} from '@react-navigation/native';
import axios from 'axios';
import {BASE_URL} from '../../API/urls';
import EmptyView from '../../components/EmptyView/empty-view';
import CustomHeader from '../../components/atoms/headers/custom-header';
import {Loader} from '../../components/atoms/loader';
import ProductItem from '../../components/product/product-item';
import {mvs} from '../../config/metrices';
import styles from './styles';
import CustomBackHeader from '../../components/atoms/headers/custom-back-header';
import AsyncStorage from '@react-native-async-storage/async-storage';

const WatchList = props => {
  const {navigation, route} = props;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useFocusEffect(
    React.useCallback(() => {
      getHomeProducts('watchlist/fetch_watchlist?user_id=');
    }, []),
  );
  const getHomeProducts = async url => {
    const u = await AsyncStorage.getItem('@user');
    var us = JSON.parse(u);
    console.log('URL is ==> ', BASE_URL + url + us?.id);
    setLoading(true);
    axios
      .get(BASE_URL + url + us?.id)
      .then(response => {
        setData(response?.data?.watchlist);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
      });
  };

  return (
    <View style={styles.container}>
      <CustomBackHeader title={'Watch List'} showBack={true} />
      {loading ? (
        <Loader />
      ) : (
        <View style={styles.body}>
          {data?.length > 0 ? (
            <FlatList
              key="categoryList"
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                paddingBottom: mvs(40),
                marginTop: mvs(1),
              }}
              data={data}
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={() =>
                    props?.navigation?.navigate('ProductDetails', {
                      id: item?.id,
                    })
                  }>
                  <ProductItem item={item?.product} />
                </TouchableOpacity>
              )}
            />
          ) : (
            <EmptyView />
          )}
        </View>
      )}
    </View>
  );
};
export default WatchList;
