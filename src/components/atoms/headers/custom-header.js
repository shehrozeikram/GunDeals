import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  ImageBackground,
  TextStyle,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {
  HeaderLogo,
  MenuSearch,
  Stand,
  ThreeLinesMenu,
} from '../../../assets/icons';
import {HeaderBg} from '../../../assets/images';
import {colors} from '../../../config/colors';
import {mvs} from '../../../config/metrices';
import Bold from '../../../typography/bold-text';
const CustomAppHeader = ({
  style,
  title,
  onMenuClick,
  onThreeLinesMenuClick,
}) => {
  const navigation = useNavigation();
  return (
    <ImageBackground source={HeaderBg} style={[styles.container, style]}>
      <TouchableOpacity onPress={onMenuClick}>
        <MenuSearch />
      </TouchableOpacity>
      <View style={{alignItems: 'center', flex: 1}}>
        {title == 'Home' ? (
          <HeaderLogo style={{marginLeft: mvs(15)}} />
        ) : (
          <Bold style={[styles.title]} label={title} fontSize={mvs(16)} />
        )}
      </View>
      <TouchableOpacity style={{marginHorizontal: mvs(10)}}>
        <Stand />
      </TouchableOpacity>
      <TouchableOpacity onPress={onThreeLinesMenuClick}>
        <ThreeLinesMenu />
      </TouchableOpacity>
    </ImageBackground>
  );
};
export default React.memo(CustomAppHeader);
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
    fontStyle: 'italic',
    textTransform: 'uppercase',
  },
  back: {
    marginRight: mvs(20),
  },
});
