import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View,
  ImageBackground,
  TextStyle,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { HeaderLogo, LoginIcon, MenuSearch, Stand, ThreeLinesMenu } from '../../../assets/icons';
import { HeaderBg } from '../../../assets/images';
import { colors } from '../../../config/colors';
import { mvs } from '../../../config/metrices';
import Bold from '../../../typography/bold-text';
import Regular from '../../../typography/regular-text';

const CustomBackHeader = ({
  style,
  title,
  onMenuClick,
  onThreeLinesMenuClick,
}) => {
  const navigation = useNavigation();
  return (
    <ImageBackground source={HeaderBg} style={[styles.container, style]}>
      <View style={{ alignItems: 'center', flex: 1 }}>
        <HeaderLogo />
      </View>
      <TouchableOpacity style={{ marginHorizontal: mvs(10) }}>
        <Stand />
      </TouchableOpacity>
    </ImageBackground>
  );
};
export default React.memo(CustomBackHeader);
const styles = StyleSheet.create({
  container: {
    height: mvs(78),
    flexDirection: 'row',
    paddingHorizontal: mvs(16),
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: mvs(16),
    color: colors.white,
    marginLeft: mvs(7),
  },
  back: {
    marginRight: mvs(20),
  },
});
