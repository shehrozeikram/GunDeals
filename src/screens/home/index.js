import React, {useState} from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import {CaretDown} from '../../assets/icons';
import CustomHeader from '../../components/atoms/headers/custom-header';
import {Row} from '../../components/atoms/row';
import CategoryItem from '../../components/category-item/category-item';
import ProductItem from '../../components/product/product-item';
import {mvs} from '../../config/metrices';
import Bold from '../../typography/bold-text';
import styles from './styles';
const categories = [
  {id: 1, title: 'Date (newest first)', isSelected: true},
  {id: 2, title: '17 Fireball', isSelected: false},
  {id: 3, title: 'Rating', isSelected: false},
  {id: 4, title: '17 HMR', isSelected: false},
  {id: 5, title: '16 GA', isSelected: false},
  {id: 6, title: '17 HM2', isSelected: false},
  {id: 7, title: '17 Hornest', isSelected: false},
  {id: 8, title: '17 PMC/Aguila', isSelected: false},
  {id: 9, title: '17 Remington', isSelected: false},
  {id: 10, title: '17 WSM', isSelected: false},
  {id: 11, title: '20 GA', isSelected: false},
  {id: 12, title: '20 Tactical', isSelected: false},
  {id: 13, title: '20 VarTarg', isSelected: false},
  {id: 14, title: '204 Ruger', isSelected: false},
  {id: 15, title: '218 Bee', isSelected: false},
  {id: 16, title: '20 BB', isSelected: false},
];
const Home = props => {
  const {navigation, route} = props;
  const [showCategories, setShowCategories] = useState(false);
  return (
    <View style={styles.container}>
      <CustomHeader
        title={route?.params?.type ? route?.params?.type : 'Home'}
        onMenuClick={() => navigation?.toggleDrawer()}
      />
      <View style={styles.body}>
        <Row style={{alignItems: 'center'}}>
          <Bold label={'Showing all categories'} fontSize={mvs(14)} />
          <TouchableOpacity onPress={() => setShowCategories(!showCategories)}>
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
                isSelected={item?.isSelected}
                title={item?.title}
                key={index}
              />
            )}
          />
        ) : (
          <FlatList
            key={2}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: mvs(10),
              marginTop: mvs(15),
            }}
            data={[1, 2, 3, 4, 5, 6, 7, 8]}
            renderItem={({item}) => (
              <ProductItem
                onPress={() => props?.navigation?.navigate('ProductDetails')}
              />
            )}
          />
        )}
      </View>
    </View>
  );
};
export default Home;
