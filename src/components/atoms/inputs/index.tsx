import React from 'react'
import { KeyboardTypeOptions, NativeSyntheticEvent, StyleProp, StyleSheet, TextInput, TextInputFocusEventData, View, ViewStyle } from 'react-native'
import { SearchIcon } from '../../../assets/icons'
import { colors } from '../../../config/colors'
import { mvs } from '../../../config/metrices'
import Regular from '../../../typography/regular-text'
import { Row } from '../row'
type props = {
    onChangeText: (text: string) => void
    value: string
    label: string
    placeholder?: string
    style?: StyleProp<ViewStyle>
    labelStyle?: StyleProp<ViewStyle>
    containerStyle?: StyleProp<ViewStyle>
    secureTextEntry?: boolean | undefined
    keyboardType?: KeyboardTypeOptions | undefined
    onBlur?: ((e: NativeSyntheticEvent<TextInputFocusEventData>) => void) | undefined
}
const PrimaryInput = (props: props) => {
    const {
        onChangeText,
        value,
        style,
        label,
        placeholder = 'type here',
        labelStyle,
        containerStyle,
        secureTextEntry,
        keyboardType,
        onBlur

    } = props;
    return (
        <View style={[styles.container, containerStyle]}>
            <Regular style={[styles.labelStyle, labelStyle]} label={label} />
            <TextInput onBlur={onBlur} keyboardType={keyboardType} secureTextEntry={secureTextEntry} value={value} placeholder={placeholder} onChangeText={onChangeText} style={[styles.textInput, style]} />
        </View>
    )
};

export default React.memo(PrimaryInput)
export const SearchInput = (props: props) => {
    const {
        onChangeText,
        value,
        style,
        label,
        placeholder = 'Search',
        labelStyle,
        containerStyle,
        secureTextEntry,
        keyboardType,
        onBlur

    } = props;
    return (
        <Row style={[styles.searchContainer, containerStyle]}>
            <SearchIcon />
            <TextInput onBlur={onBlur} keyboardType={keyboardType}
                secureTextEntry={secureTextEntry} value={value}
                placeholder={placeholder} onChangeText={onChangeText}
                style={[styles.searchTextInput, style]} />
        </Row>
    )
};

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 0.7,
        paddingTop: mvs(7),
        marginBottom: mvs(15),
    },
    searchContainer: {
        backgroundColor: colors.white,
        borderRadius: mvs(25),
        marginBottom: mvs(30),
        alignItems: 'center',
        paddingHorizontal: mvs(15),
    },
    textInput: {
        flex: 1,
        color: colors.black,
        paddingHorizontal: mvs(10),
        textAlignVertical: 'center',
        height: mvs(40),
    },
    searchTextInput: {
        flex: 1,
        color: colors.black,
        paddingHorizontal: mvs(10),
        textAlignVertical: 'center',
        height: mvs(55),
    },
    labelStyle: {
        color: colors.primary,
    },
})