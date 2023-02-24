import React from 'react';
import { View, ScrollView, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { CouponIcon, DateIcon, DateStar, HomeIcon, RightArrow, StarIcon } from '../../assets/icons';
import { drawer_top_bg } from '../../assets/images';
import { SearchInput } from '../../components/atoms/inputs'
import { Row } from '../../components/atoms/row';
import { colors } from '../../config/colors';
import { CATEGORIES } from '../../config/constants';
import { mvs } from '../../config/metrices';
import Bold from '../../typography/bold-text';
import Medium from '../../typography/medium-text';
import Regular from '../../typography/regular-text';
import * as SVGS from '../../assets/icons'
import { PrimaryButton, SecondayButton } from '../../components/atoms/buttons';
import { TouchableRow } from '../../components/atoms/touchable-row';
const CustomDrawerContent = (props) => {

    return (
        <View style={{ flex: 1, backgroundColor: colors.white }}>
            <ImageBackground source={drawer_top_bg} style={{ height: mvs(220), width: '100%', paddingVertical: mvs(17) }}>
                <View style={{ paddingHorizontal: mvs(20) }}>
                    <SearchInput />
                </View>
                <View>
                    <Row style={styles.mainRow}>
                        <TouchableRow style={styles.row}>
                            <HomeIcon />
                            <Medium label={'Home'} style={styles.label} />
                        </TouchableRow>
                        <TouchableRow style={styles.row}>
                            <StarIcon />
                            <Medium label={'Popular'} style={styles.label} />
                        </TouchableRow>
                    </Row>
                    <LinearGradient colors={['#9EA2A800', '#9EA2A8', '#9EA2A800']} style={styles.linearGradient} />
                    <Row style={styles.mainRow}>
                        <TouchableRow style={styles.row}>
                            <DateIcon />
                            <Medium label={'Today'} style={styles.label} />
                        </TouchableRow>
                        <TouchableRow style={styles.row}>
                            <CouponIcon />
                            <Medium label={'Coupon'} style={styles.label} />
                        </TouchableRow>
                    </Row>
                    <LinearGradient colors={['#9EA2A800', '#9EA2A8', '#9EA2A800']} style={styles.linearGradientv} />
                </View>
            </ImageBackground>
            <View style={{ backgroundColor: colors.primary, paddingHorizontal: mvs(25) }}>
                <TouchableRow style={{ alignItems: 'center', paddingVertical: mvs(15) }}>
                    <Row style={{ justifyContent: 'flex-start' }}>
                        <DateStar />
                        <Medium label={'Top this week'} style={{ marginHorizontal: mvs(15), color: colors.white }} />
                    </Row>
                    <RightArrow />
                </TouchableRow>
            </View>
            <ScrollView contentContainerStyle={{ flexGrow: 1, paddingHorizontal: mvs(20) }}>
                <Row style={{ alignItems: 'center', marginTop: mvs(25) }}>
                    <View style={{ height: StyleSheet.hairlineWidth, backgroundColor: colors.lightGray, flex: 1 }} />
                    <Regular label={'categories'} style={{ textTransform: 'uppercase', marginHorizontal: mvs(10) }} />
                    <View style={{ height: StyleSheet.hairlineWidth, backgroundColor: colors.lightGray, flex: 1 }} />
                </Row>
                {CATEGORIES.map(x => {
                    const Icon = SVGS[x?.icon]
                    return (<TouchableRow style={{ marginTop: mvs(20) }}>
                        <Bold label={x?.title} style={{ textTransform: 'uppercase', }} />
                        <Icon height={mvs(20)} width={mvs(20)} />
                    </TouchableRow>)
                })}
                <Row style={{ alignItems: 'center', marginTop: mvs(25) }}>
                    <View style={{ height: StyleSheet.hairlineWidth, backgroundColor: colors.lightGray, flex: 1 }} />
                    <Regular label={'Quick Links'} style={{ textTransform: 'uppercase', marginHorizontal: mvs(10) }} />
                    <View style={{ height: StyleSheet.hairlineWidth, backgroundColor: colors.lightGray, flex: 1 }} />
                </Row>
                <Row style={{ marginTop: mvs(20) }}>
                    <SecondayButton title={'AK Deals'} containerStyle={{ backgroundColor: colors.aqua }} />
                    <SecondayButton title={'AR Deals'} containerStyle={{ backgroundColor: colors.aqua }} />
                </Row>
                <Row style={{ marginTop: mvs(20) }}>
                    <SecondayButton title={'1911'} containerStyle={{ backgroundColor: colors.aqua }} />
                    <SecondayButton title={'C&R'} containerStyle={{ backgroundColor: colors.aqua }} />
                </Row>
                <Row style={{ marginTop: mvs(20) }}>
                    <SecondayButton title={'Rimfire'} containerStyle={{ backgroundColor: colors.aqua }} />
                    <SecondayButton title={'Revolver'} containerStyle={{ backgroundColor: colors.aqua }} />
                </Row>
                <Row style={{ marginTop: mvs(20) }}>
                    <SecondayButton title={'22LR Ammo'} containerStyle={{ backgroundColor: colors.aqua }} />
                    <SecondayButton title={'Used Guns'} containerStyle={{ backgroundColor: colors.aqua }} />
                </Row>
                <Row style={{ marginTop: mvs(20) }}>
                    <TouchableOpacity style={{ flex: 1, padding: mvs(10), backgroundColor: colors.secondary }}>
                        <Row style={{ alignItems: 'center' }}>
                            <Bold label={'watchlist'} />
                            <SVGS.Watchlist />
                        </Row>
                    </TouchableOpacity>
                    <View style={{ width: StyleSheet.hairlineWidth, height: '100%', backgroundColor: colors.lightGray }} />
                    <TouchableOpacity style={{ flex: 1, padding: mvs(10), backgroundColor: colors.secondary }}>
                        <Row style={{ alignItems: 'center' }}>
                            <Bold label={'watchlist'} />
                            <SVGS.LoginIcon />
                        </Row>
                    </TouchableOpacity>
                </Row>
            </ScrollView>
        </View>
    );
}
export default CustomDrawerContent;
const styles = StyleSheet.create({
    row: {
        width: mvs(100),
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    label: {
        lineHeight: mvs(20),
        fontSize: mvs(16),
        color: colors.white,
        marginHorizontal: mvs(7)
    },
    linearGradient: { height: StyleSheet.hairlineWidth, },
    linearGradientv: {
        width: StyleSheet.hairlineWidth, position: 'absolute',
        alignSelf: 'center',
        height: '100%',
    },
    mainRow: {
        paddingVertical: mvs(10),
        paddingHorizontal: mvs(25)
    }
});