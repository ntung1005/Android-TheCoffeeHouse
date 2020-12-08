import React, { FC } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { GREY_COLOR, OPACITY_COLOR, PADDING_GENERAL, WHITE_COLOR } from '../../../../styles/globalStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

interface HeaderLoggedInInterface {
    navigation: any
}

const HeaderLoggedIn: FC<HeaderLoggedInInterface> = (props) => {

    const { navigation } = props;

    return (
        <View
            style={{
                flexDirection: 'row',
                padding: PADDING_GENERAL,
                backgroundColor: WHITE_COLOR,
                borderBottomColor: OPACITY_COLOR,
                borderBottomWidth: 0.5,
                justifyContent: 'space-between',
                alignItems: 'center'
            }}
        >
            <View style={{
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <View style={{
                    marginRight: 8, width: 40,
                    height: 40, borderRadius: 100,
                    backgroundColor: 'red'
                }} />

                <View>
                    <Text style={{ fontWeight: 'bold' }}>Nguyễn Tùng</Text>
                    <Text>Khách hàng mới</Text>
                </View>
            </View>

            <TouchableOpacity onPress={() => {
                navigation.navigate('NotificationScreen');
            }}>
                <EvilIcons name={"bell"} size={26} color={GREY_COLOR} />
            </TouchableOpacity>
        </View>
    )
};

export default HeaderLoggedIn;