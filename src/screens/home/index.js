import {useFocusEffect} from '@react-navigation/native';
import axios from 'axios';
import React, {useState} from 'react';
import {FlatList, Modal, TouchableOpacity, View} from 'react-native';
import {BASE_URL} from '../../API/urls';
import EmptyView from '../../components/EmptyView/empty-view';
import {PrimaryRadioButton} from '../../components/atoms/buttons/primary-radio-button';
import CustomHeader from '../../components/atoms/headers/custom-header';
import {Loader} from '../../components/atoms/loader';
import ProductItem from '../../components/product/product-item';
import {mvs} from '../../config/metrices';
import styles from './styles';
import {FadeInFlatList} from '@ja-ka/react-native-fade-in-flatlist';
const Home = props => {
  const {navigation, route} = props;
  const [showCategories, setShowCategories] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState({id: 0});
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sort, setSort] = useState('Date (newest first)');
  const [modalVisible, setModalVisible] = useState(false);
  useFocusEffect(
    React.useCallback(() => {
      // getCategories();
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
        //setData(response?.data?.products);
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
  const getFilterProducts = async key => {
    setSort(key);
    setModalVisible(false);
    setLoading(true);

    axios
      .get(BASE_URL + 'products/filter_products?' + key + '=true')
      .then(response => {
        setData(response?.data?.filter_products);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
      });
  };
  return (
    <View style={styles.container}>
      <CustomHeader
        title={route?.params?.type ? route?.params?.type : 'Home'}
        onMenuClick={() => navigation?.toggleDrawer()}
        onThreeLinesMenuClick={() => setModalVisible(!modalVisible)}
      />
      {loading ? (
        <Loader />
      ) : (
        <View style={styles.body}>
          {data?.length > 0 ? (
            <FadeInFlatList
              initialDelay={0}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{paddingHorizontal: mvs(15)}}
              durationPerItem={600}
              parallelItems={1}
              itemsToFadeIn={data?.length}
              data={data}
              renderItem={({item, index}) => (
                <TouchableOpacity
                  onPress={() =>
                    props?.navigation?.navigate('ProductDetails', {
                      id: item?.id,
                    })
                  }>
                  <ProductItem item={item} index={index} />
                </TouchableOpacity>
              )}
            />
          ) : (
            <EmptyView />
          )}
        </View>
      )}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.menu}>
          <PrimaryRadioButton
            onPress={() => getFilterProducts('date_newest_first')}
            isSelected={sort == 'date_newest_first'}
            title={'Date (newest first)'}
          />
          <View style={styles.line}></View>
          <PrimaryRadioButton
            onPress={() => getFilterProducts('rating')}
            isSelected={sort == 'rating'}
            title={'Rating'}
          />
          <View style={styles.line}></View>
          <PrimaryRadioButton
            onPress={() => getFilterProducts('lowest_price')}
            isSelected={sort == 'lowest_price'}
            title={'Price (lowest price)'}
          />
        </View>
      </Modal>
    </View>
  );
};
export default Home;
