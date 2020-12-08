import React, { FC } from 'react';
import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';

import MyButton from "../../components/MyButton/MyButton";
import { BASE_COLOR, GREY_COLOR, PADDING_GENERAL, WHITE_COLOR } from "../../styles/globalStyles";
import ServiceArea from "./Components/ServiceArea";
import NewsArea from "./Components/NewsArea";
import DefaultContentNewsScreen from "./Components/DefaultContentNewsScreen";
import { useDispatch, useSelector } from 'react-redux';
import store from '../../store/store';
import AuthType from '../../store/types/AuthType';
import HeaderDefault from './Components/HeaderComponent/HeaderDefaut';
import HeaderLoggedIn from './Components/HeaderComponent/HeaderLoggedIn';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        image: "https://product.hstatic.net/1000075078/product/cf-sua-trung-muoi_1x1_60cc3fbc3c0147ca889fdf0312ba5c14_large.jpg",
        title: 'CHƯƠNG TRÌNH KHÁCH HÀNG THÂN THIẾT: BẠN CÓ THÊM 3 THÁNG ĐỔI BEAN NHẬN ƯU ĐÃI',
        content: "Chương trình khách hàng thân thiết - The Coffee House Rewards cập nhật thêm nhiều ưu đãi hấp dẫn, đa tiện ích: giải trí, mua sắm, ăn uống,... Đặc biệt,..."
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-gdfverewe',
        image: "https://product.hstatic.net/1000075078/product/cf-sua-trung-muoi_1x1_60cc3fbc3c0147ca889fdf0312ba5c14_large.jpg",
        title: 'CHƯƠNG TRÌNH KHÁCH HÀNG THÂN THIẾT: BẠN CÓ THÊM 3 THÁNG ĐỔI BEAN NHẬN ƯU ĐÃI',
        content: "Chương trình khách hàng thân thiết - The Coffee House Rewards cập nhật thêm nhiều ưu đãi hấp dẫn, đa tiện ích: giải trí, mua sắm, ăn uống,... Đặc biệt,..."
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-wefsd4rwe',
        image: "https://product.hstatic.net/1000075078/product/cf-sua-trung-muoi_1x1_60cc3fbc3c0147ca889fdf0312ba5c14_large.jpg",
        title: 'CHƯƠNG TRÌNH KHÁCH HÀNG THÂN THIẾT: BẠN CÓ THÊM 3 THÁNG ĐỔI BEAN NHẬN ƯU ĐÃI',
        content: "Chương trình khách hàng thân thiết - The Coffee House Rewards cập nhật thêm nhiều ưu đãi hấp dẫn, đa tiện ích: giải trí, mua sắm, ăn uống,... Đặc biệt,..."
    },
];

const NewsScreen: FC<any> = (props) => {

    const { navigation } = props;


    const state = useSelector(() => store.getState());

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {
                state.AuthReducer.isLogin ?
                    <HeaderLoggedIn navigation={props.navigation} />
                    :
                    <HeaderDefault navigation={props.navigation} />
            }

            <ScrollView style={{ flex: 1 }}>
                <ServiceArea />

                <View style={{ paddingLeft: PADDING_GENERAL, paddingRight: PADDING_GENERAL }}>
                    <NewsArea title={"Ưu đãi đặc biệt"} data={DATA} />

                    <NewsArea title={"Cập nhật từ nhà"} data={DATA} />

                    <NewsArea title={"#CoffeeLover"} data={DATA} />

                    <DefaultContentNewsScreen />
                </View>

            </ScrollView>
        </SafeAreaView>
    )
};

export default NewsScreen;
