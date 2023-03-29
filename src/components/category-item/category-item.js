import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../../config/colors';
import {mvs} from '../../config/metrices';
import {PrimaryRadioButton} from '../atoms/buttons/primary-radio-button';
const CategoryItem = ({style, onRadioPress, title, isSelected = false}) => {
  return (
    <View style={{...styles.main, ...style}}>
      <PrimaryRadioButton
        isSelected={isSelected}
        title={title}
        onPress={onRadioPress}
      />
    </View>
  );
};
export default React.memo(CategoryItem);
const styles = StyleSheet.create({
  main: {
    height: mvs(66),
    borderWidth: 1,
    borderColor: colors.lightGray,
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    paddingLeft: mvs(22),
  },
});
