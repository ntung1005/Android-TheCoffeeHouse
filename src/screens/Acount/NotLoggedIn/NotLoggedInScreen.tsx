import React, {FC} from "react";
import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    TouchableNativeFeedbackComponent, TouchableOpacity, StyleSheet
} from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {BASE_COLOR, FONT_BASE, PADDING_GENERAL, WHITE_COLOR} from "../../../styles/globalStyles";
import { useDispatch, useSelector } from 'react-redux';
import store from '../../../store/store';

const NotLoggedInScreen: FC<any> = (props) => {


    const state = useSelector(() => store.getState());

    return (
        <SafeAreaView style={{flex: 1}}>

            <TouchableOpacity style={{
                width: '100%',
                padding: PADDING_GENERAL,
                backgroundColor: BASE_COLOR,
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <Ionicons name={"person-circle-outline"} color={WHITE_COLOR} size={36} style={{marginRight: 8}}/>

                <Text style={{fontSize: FONT_BASE, color: WHITE_COLOR, fontWeight: 'bold'}}>Đăng nhập</Text>
            </TouchableOpacity>
            <ScrollView style={{flex: 1}}>
                <View style={{backgroundColor:WHITE_COLOR,marginVertical:PADDING_GENERAL}}>
                    <TouchableOpacity style={styles.wrapCard}>
                        <View style={{
                            width: 24,
                            height: 24,
                            flexDirection: 'row',
                            alignItems:'center',
                            justifyContent:'center',
                            borderRadius: 40,
                            borderColor: 'black',
                            borderWidth: 1,
                            marginRight:12
                        }}>
                            <EvilIcons name={"star"} size={20} color={"black"}/>
                        </View>
                        <Text style={{fontSize:FONT_BASE}}>The Coffee House Rewards</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    wrapCard: {
        flexDirection: 'row',
        alignItems: 'center',
        padding:PADDING_GENERAL
    }
});

export default NotLoggedInScreen;
