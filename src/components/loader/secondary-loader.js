import React from 'react';
import {StyleSheet, ActivityIndicator, View, Modal} from 'react-native';
import {colors} from '../../config/colors';
import {mvs} from '../../config/metrices';
const SecondaryLoader = ({visible, animationType}) => {
  return (
    <Modal transparent={true} visible={visible} animationType={animationType}>
      <View style={styles.main}>
        <ActivityIndicator size="large" color={colors.white} />
      </View>
    </Modal>
  );
};
export default React.memo(SecondaryLoader);
const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    position: 'absolute',
    left: '20%',
    right: '20%',
    bottom: '45%',
    top: '45%',
    borderRadius: mvs(20),
  },
});
