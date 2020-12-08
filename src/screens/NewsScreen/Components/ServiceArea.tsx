import React, {FC} from "react";
import {View, Text, StyleSheet} from "react-native";
import {PADDING_GENERAL, WHITE_COLOR} from "../../../styles/globalStyles";

const ServiceArea: FC<any> = (props) => {
    return (
        <View style={styles.wrapper}>
            <View style={{alignItems: 'center'}}>
                <View style={{width: 56, height: 56, backgroundColor: 'red', marginBottom: 6}}/>
                <Text style={{fontSize:13}}>Tích điểm</Text>
            </View>

            <View style={{alignItems: 'center'}}>
                <View style={{width: 56, height: 56, backgroundColor: 'red', marginBottom: 6}}/>
                <Text style={{fontSize:13}}>Tích điểm</Text>
            </View>

            <View style={{alignItems: 'center'}}>
                <View style={{width: 56, height: 56, backgroundColor: 'red', marginBottom: 6}}/>
                <Text style={{fontSize:13}}>Tích điểm</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: WHITE_COLOR,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: PADDING_GENERAL,
        marginBottom: PADDING_GENERAL,
        paddingTop: 2 * PADDING_GENERAL,
        paddingBottom: 2 * PADDING_GENERAL,
    },
});

export default ServiceArea;
