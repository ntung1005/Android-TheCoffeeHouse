import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import MyEmptyProduct from '../../../components/MyEmptyProduct/MyEmptyProduct';
import MyHeader from '../../../components/MyHeader/MyHeader';
import { PADDING_GENERAL } from '../../../styles/globalStyles';

const NotificationScreen: FC<any> = (props) => {

    const {navigation} = props;

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <MyHeader title={"Thông báo"} onClose={() => {navigation.goBack()}} />
            <ScrollView>
                <View style={{ padding: PADDING_GENERAL }}>
                    <MyEmptyProduct />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
};

export default NotificationScreen;