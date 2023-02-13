import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { FlatList, View } from 'react-native';
import { PlusButton } from '../../components/atoms/buttons';
import AppHeader from '../../components/atoms/headers/index';
import HomeCard from '../../components/molecules/cards/home-card';
import { useAppSelector } from '../../hooks/use-store';
import { Task } from '../../types/entities-types';
import RootStackParamList from '../../types/navigation-types/root-stack';
import styles from './styles';
type props = NativeStackScreenProps<RootStackParamList, 'Home'>;
type RenderProps = {
  item: Task
  index: number
}
const Home = (props: props) => {
  const { navigation } = props;
  const userInfo = useAppSelector(s => s?.user?.userInfo);
  const renderItem = React.useCallback(({ item, index }: RenderProps) => {
    return <HomeCard onDeletePress={() => { }} {...item} onEditPress={() => props?.navigation?.navigate('AddTask', item)} />;
  }, []);

  return (
    <View style={styles.container}>
      <AppHeader title="To-do List" />
      <FlatList
        contentContainerStyle={styles.contentContainerStyle}
        data={[{}, {}]} renderItem={renderItem} />
      <PlusButton onPress={() => props?.navigation?.navigate('AddTask')} title='Add' />
    </View>
  );
};
export default Home;
