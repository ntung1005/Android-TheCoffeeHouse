import React from 'react';
import {
    SafeAreaView,
    Text,
    View,
    ScrollView, FlatList
} from 'react-native';
import MyTabs from "../../components/MyTabs/MyTabs";
import MyCardItem from "../../components/MyCards/MyCardItem";
import { PADDING_GENERAL, WIDTH_LAYOUT_GENERAL } from "../../styles/globalStyles";

const dataTab1 = [
    {
        image: 'https://product.hstatic.net/1000075078/product/cf-sua-trung-muoi_1x1_60cc3fbc3c0147ca889fdf0312ba5c14_large.jpg',
        title: 'CHƯƠNG TRÌNH KHÁCH HÀNG THÂN THIẾT',
        price: 90000
    },
    {
        image: 'https://product.hstatic.net/1000075078/product/cf-sua-trung-muoi_1x1_60cc3fbc3c0147ca889fdf0312ba5c14_large.jpg',
        title: 'CHƯƠNG d TRÌNH KHÁCH HÀNG THÂN THIẾ',
        price: 100
    },
    {
        image: 'https://product.hstatic.net/1000075078/product/cf-sua-trung-muoi_1x1_60cc3fbc3c0147ca889fdf0312ba5c14_large.jpg',
        title: 'CHƯƠNG e TRÌNH KHÁCH HÀNG THÂN THIẾT',
        price: 100000
    },
    {
        image: 'https://product.hstatic.net/1000075078/product/cf-sua-trung-muoi_1x1_60cc3fbc3c0147ca889fdf0312ba5c14_large.jpg',
        title: 'CHƯƠNG x TRÌNH KHÁCH HÀNG THÂN THIẾT',
        price: 100
    },
    {
        image: 'https://product.hstatic.net/1000075078/product/cf-sua-trung-muoi_1x1_60cc3fbc3c0147ca889fdf0312ba5c14_large.jpg',
        title: 'CHƯƠNG esTRÌNH KHÁCH HÀNG THÂN THIẾT',
        price: 100
    },
    {
        image: 'https://product.hstatic.net/1000075078/product/cf-sua-trung-muoi_1x1_60cc3fbc3c0147ca889fdf0312ba5c14_large.jpg',
        title: 'CHƯƠNG xd TRÌNH KHÁCH HÀNG THÂN THIẾT',
        price: 100
    },
];

const dataTabs = [
    {
        title: "Phổ biến",
        content: <View>
            <View style={{ paddingHorizontal: PADDING_GENERAL / 2, paddingTop: PADDING_GENERAL / 2 }}>
                <Text style={{ fontSize: 15 }}>Món được yêu thích</Text>
            </View>
            <FlatList
                data={dataTab1}
                numColumns={2}
                keyExtractor={(item, index) => item.title}
                renderItem={({ item }) => {
                    return (
                        // WIDTH_LAYOUT_GENERAL / 2
                        <View style={{
                            width: (WIDTH_LAYOUT_GENERAL - PADDING_GENERAL * 2) / 2,
                            margin: PADDING_GENERAL / 2
                        }}>
                            <MyCardItem
                                image={item.image}
                                title={item.title}
                                price={item.price} />
                        </View>
                    )
                }
                } />
        </View>
    },
    {
        title: "Thức uống",
        content: <View>
            <Text>Tab 2</Text>
        </View>
    },
    {
        title: "Đồ ăn",
        content: <View>
            <Text>Tab 3</Text>
        </View>
    },
];

const OrderScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>

            <MyTabs data={dataTabs} />

        </SafeAreaView>

    )
};

export default OrderScreen;
