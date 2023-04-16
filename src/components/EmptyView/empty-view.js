import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Empty} from '../../assets/icons';
const EmptyView = ({style, item, onPress = () => {}}) => {
  return (
    <View style={styles.main}>
      <Empty />
    </View>
  );
};
export default React.memo(EmptyView);
const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
