import React, {FC, useRef} from "react";
import {View, Text, TextInput, Animated, Button, StyleSheet, TouchableOpacity} from "react-native";
import {GREY_COLOR} from "../../styles/globalStyles";

interface MyInputInterface {
    onBlur?: () => void,
    onFocus?: () => void,
    onChangeText: () => void,
    value: any,
    isFloatLabel: boolean,
    textFloatLabel: string,
    placeholder: string,
    customStyles?: any
}

const MyInput: FC<MyInputInterface> = (props) => {

    const {
        onBlur,
        onFocus,
        onChangeText,
        value,
        isFloatLabel,
        textFloatLabel,
        placeholder,
        customStyles
    } = props;

    const top = new Animated.Value(6);
    const fontSizeLabel = new Animated.Value(15);

    const floatLabelTop = () => {
        // Will change fadeAnim value to 1 in 5 seconds
        Animated.timing(top, {
            toValue: -20,
            duration: 300
        }).start();

        Animated.timing(fontSizeLabel, {
            toValue: 12,
            duration: 300
        }).start();
    };

    const floatLabelBottom = () => {
        // Will change fadeAnim value to 0 in 5 seconds
        Animated.timing(top, {
            toValue: 6,
            duration: 300
        }).start();

        Animated.timing(fontSizeLabel, {
            toValue: 15,
            duration: 300
        }).start();
    };


    return (
        <View>
            <View style={styles.wrapInput}>
                {
                    isFloatLabel ? <Animated.Text style={[styles.label, {
                            top: top,
                            fontSize: fontSizeLabel
                        }]}>{textFloatLabel}</Animated.Text>
                        :
                        undefined
                }

                <TextInput style={[styles.textInput,customStyles]}
                           placeholder={placeholder}
                           value={value}
                           onChangeText={onChangeText}
                           onFocus={() => {
                               floatLabelTop();
                               if (onFocus) {
                                   onFocus()
                               }
                           }}
                           onBlur={() => {
                               floatLabelBottom();
                               if (onBlur) {
                                   onBlur()
                               }
                           }}
                />
            </View>


        </View>
    )
};

const styles = StyleSheet.create({
    wrapInput: {
        width: "100%",
        height: 36,
        position: 'relative'
    },
    textInput: {
        width: "100%",
        height: "100%",
        borderBottomColor: GREY_COLOR,
        borderBottomWidth: 1
    },
    label: {
        position: 'absolute',
        // top:6,
        left: 4
    },


    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    fadingContainer: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: "powderblue"
    },
    fadingText: {
        fontSize: 28,
        textAlign: "center",
        margin: 10
    },
    buttonRow: {
        flexDirection: "row",
        marginVertical: 16
    }
});

export default MyInput;
