import React from "react";
import {View, Text, TouchableOpacity, StyleSheet, Image} from "react-native";
import {BASE_COLOR, FONT_BASE} from "../../styles/globalStyles";

interface ButtonProps {
    disabled?: boolean,
    style?: any,
    width?: any,
    borderRadius?: number,
    paddingLeft?: number,
    colorBorder: string,
    backgroundColor: string,
    textColor: string,
    contentText: any,
    fontWeightContentText?: 'bold' | 'normal',
    local: "flex-start" | "center" | "flex-end",
    onPress?: (e: any) => void,
}

const MyButton = (props: ButtonProps) => {
    const {
        colorBorder, backgroundColor, textColor, contentText, local, width, borderRadius, onPress, style, disabled,
    } = props;

    return (
        <View>
            <TouchableOpacity disabled={disabled} onPress={onPress} style={[{alignItems: local}]}>

                <View style={[style,styles.btn_viewMore, {
                    borderColor: colorBorder,
                    backgroundColor: backgroundColor,
                    width: width ? width : undefined,
                    borderRadius: borderRadius ? borderRadius : 8,
                    paddingRight: 16,
                    paddingLeft: 16,
                    paddingTop: 4,
                    paddingBottom: 4
                },style]}>
                    <Text style={[styles.btn_viewMore_text, {
                        color: textColor
                    }]}>{contentText}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    btn_viewMore: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent:'center',
        borderWidth: 1,
    },
    btn_viewMore_text: {
        textAlign: "center",
        fontSize:FONT_BASE
    }
});

export default MyButton;
