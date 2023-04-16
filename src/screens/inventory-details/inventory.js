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
const Inventory = props => {
  const {navigation, route} = props;
  const [showCategories, setShowCategories] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState({id: 0});
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getHomeProducts('products/index');
  }, []);
  const getHomeProducts = async url => {
    setLoading(true);
    axios
      .get(BASE_URL + url)
      .then(response => {
        setData(response?.data?.products);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
      });
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <Loader />
      ) : (
        <View style={{...styles.body}}>
          {data?.length > 0 ? (
            <FlatList
              key="categoryList"
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                paddingBottom: mvs(40),
                marginTop: mvs(5),
                paddingHorizontal: mvs(10),
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
            <EmptyView />
          )}
        </View>
      )}
    </View>
  );
};
export default Inventory;
