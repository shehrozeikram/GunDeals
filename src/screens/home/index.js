import React, {useEffect, useState} from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import {CaretDown} from '../../assets/icons';
import CustomHeader from '../../components/atoms/headers/custom-header';
import {Row} from '../../components/atoms/row';
import CategoryItem from '../../components/category-item/category-item';
import ProductItem from '../../components/product/product-item';
import {mvs} from '../../config/metrices';
import Bold from '../../typography/bold-text';
import styles from './styles';
import axios from 'axios';
import {useFocusEffect} from '@react-navigation/native';
import {BASE_URL} from '../../API/urls';
import {Loader} from '../../components/atoms/loader';
import EmptyView from '../../components/EmptyView/empty-view';

const Home = props => {
  const {navigation, route} = props;
  const [showCategories, setShowCategories] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState({id: 0});
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  useFocusEffect(
    React.useCallback(() => {
      getCategories();
      if (route?.params?.type == undefined || route?.params?.type == 'Home') {
        getHomeProducts('products/index');
      } else if (route.params?.type == 'Top this week') {
        getHomeProducts('products/today');
      } else if (route.params?.type == 'Today') {
        getHomeProducts('products/today');
      } else if (route.params?.type == 'Popular') {
        getHomeProducts('products/popular');
      } else if (route?.params?.quick != undefined) {
        console.log('Quick link search');
        getHomeProducts(
          'products/quick_links?deal_type=' + route?.params?.quick,
        );
      } else if (route?.params?.categoryId != undefined) {
        getCategoryProducts(route?.params?.categoryId);
      }
      // Clean up the effect when the component is unmounted
      return () => console.log('Screen is unfocused');
    }, [route?.params?.type, route?.params?.quick]),
  );
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
  const getCategoryProducts = async id => {
    setShowCategories(false);
    setLoading(true);
    axios
      .get(BASE_URL + 'products/show_category_products?category_id=' + id)
      .then(response => {
        setData(response?.data?.products);
        setLoading(false);
      })
      .catch(error => {
        console.log(error?.response?.data);
        setLoading(false);
      });
  };
  const getCategories = async () => {
    //setLoading(true);
    axios
      .get(BASE_URL + 'products/fetch_categories')
      .then(response => {
        setCategories(response?.data?.categories);
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <View style={styles.container}>
      <CustomHeader
        title={route?.params?.type ? route?.params?.type : 'Home'}
        onMenuClick={() => navigation?.toggleDrawer()}
      />
      {loading ? (
        <Loader />
      ) : (
        <View style={styles.body}>
          <Row style={{alignItems: 'center'}}>
            <Bold label={'SHOWING ALL CATEGORIES'} fontSize={mvs(14)} />
            <TouchableOpacity
              onPress={() => setShowCategories(!showCategories)}>
              <CaretDown />
            </TouchableOpacity>
          </Row>
          {showCategories ? (
            <FlatList
              numColumns={2}
              key={1}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                paddingBottom: mvs(10),
                marginTop: mvs(15),
                marginHorizontal: mvs(-21),
              }}
              data={categories}
              renderItem={({item, index}) => (
                <CategoryItem
                  onRadioPress={() => {
                    setSelectedCategory(item);
                    getCategoryProducts(item?.id);
                  }}
                  isSelected={item?.id == selectedCategory?.id}
                  title={item?.name}
                  key={index}
                />
              )}
            />
          ) : data?.length > 0 ? (
            <FlatList
              key="categoryList"
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                paddingBottom: mvs(40),
                marginTop: mvs(15),
              }}
              data={data}
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={() =>
                    props?.navigation?.navigate('ProductDetails', {
                      id: item?.id,
                    })
                  }>
                  <ProductItem item={item} />
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
export default Home;
