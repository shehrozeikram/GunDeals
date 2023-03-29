import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Radio, SelectedRadio} from '../../../assets/icons';
import {colors} from '../../../config/colors';
import {mvs} from '../../../config/metrices';
import Bold from '../../../typography/bold-text';
import Regular from '../../../typography/regular-text';
export const PrimaryRadioButton = ({
  onPress,
  title,
  isSelected = false,
  textStyle,
  containerStyle,
}) => {
  return (
    <TouchableOpacity
      disabled={isSelected}
      style={[styles.primaryContainer, containerStyle]}
      onPress={onPress}>
      {isSelected ? <SelectedRadio /> : <Radio />}
      {isSelected ? (
        <Bold
          style={[styles.primaryText, textStyle]}
          label={title}
          fontSize={mvs(12)}
        />
      ) : (
        <Regular style={[styles.primaryText, textStyle]} label={title} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  primaryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  primaryText: {
    marginLeft: mvs(10),
  },
});
