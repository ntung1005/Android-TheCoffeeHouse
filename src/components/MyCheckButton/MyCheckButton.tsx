import React, {FC} from "react";
import {View, Text, StyleSheet} from "react-native";
import {BASE_COLOR} from "../../styles/globalStyles";

interface MyCheckButtonInterface {
    isActive: boolean,
    style?: any,
    type?: 'circle' | 'square'
}

const MyCheckButton: FC<MyCheckButtonInterface> = (props) => {

    const {isActive, style, type} = props;

    return (
        <View style={[{borderRadius: type == 'square' ? 0 : 40}, style, styles.wrap]}>
            <View style={[{
                borderRadius: type == 'square' ? 0 : 40
            },
                isActive ? styles.active : styles.noActive,
            ]}/>
        </View>
    )
};

const styles = StyleSheet.create({
    wrap: {
        width: 24,
        height: 24,
        borderWidth: 1,
        borderColor: BASE_COLOR,
        padding: 1,
        overflow: 'hidden'
    },
    active: {
        width: '100%',
        height: '100%',
        backgroundColor: BASE_COLOR,
    },
    noActive: {}
});

export default MyCheckButton;
