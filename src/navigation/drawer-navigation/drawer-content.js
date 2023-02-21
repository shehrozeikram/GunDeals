import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native'
import { CouponIcon, DateIcon, HomeIcon, RightArrow, StarIcon } from '../../assets/icons';
import { SearchInput } from '../../components/atoms/inputs'
import { Row } from '../../components/atoms/row';
import { colors } from '../../config/colors';
import { mvs } from '../../config/metrices';
import Medium from '../../typography/medium-text';
const CustomDrawerContent = (props) => {

    return (
        <View style={{ flex: 1, backgroundColor: colors.white }}>
            <View style={{ backgroundColor: colors.secondary, paddingHorizontal: mvs(12), paddingVertical: mvs(15) }}>
                <SearchInput />
                <Row style={{ paddingHorizontal: mvs(25) }}>
                    <Row style={styles.row}>
                        <HomeIcon />
                        <Medium label={'Home'} style={styles.label} />
                    </Row>
                    <Row style={styles.row}>
                        <StarIcon />
                        <Medium label={'Popular'} style={styles.label} />
                    </Row>
                </Row>
                <Row style={{ paddingHorizontal: mvs(25), marginTop: mvs(12) }}>
                    <Row style={styles.row}>
                        <DateIcon />
                        <Medium label={'Today'} style={styles.label} />
                    </Row>
                    <Row style={styles.row}>
                        <CouponIcon />
                        <Medium label={'Coupon'} style={styles.label} />
                    </Row>
                </Row>
            </View>
            <View style={{ backgroundColor: colors.B2E3645, paddingHorizontal: mvs(37) }}>
                <Row style={{ alignItems: 'center', paddingVertical: mvs(15) }}>
                    <Row style={{ justifyContent: 'flex-start' }}>
                        <DateIcon />
                        <Medium label={'Top this week'} style={{ marginHorizontal: mvs(15), color: colors.white }} />
                    </Row>
                    <RightArrow />
                </Row>
            </View>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

            </ScrollView>
        </View>
    );
}
export default CustomDrawerContent;
const styles = StyleSheet.create({
    row: { width: mvs(100), alignItems: 'center', justifyContent: 'flex-start' },
    label: { lineHeight: mvs(20), fontSize: mvs(16), color: colors.white, marginHorizontal: mvs(7) }
});