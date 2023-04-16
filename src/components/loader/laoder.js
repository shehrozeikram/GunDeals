import React from 'react';
import {StyleSheet, ActivityIndicator, View} from 'react-native';
const Loader = ({style, item, onPress = () => {}}) => {
  return (
    <View style={styles.main}>
      <ActivityIndicator size="large" color="#00ff00" />
    </View>
  );
};
export default React.memo(Loader);
const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
