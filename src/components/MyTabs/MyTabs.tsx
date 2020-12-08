import React, { FC, ReactNode, useState } from "react";
import { View, Text, FlatList, Dimensions, TouchableOpacity, ScrollView } from "react-native";
import { BASE_COLOR, GREY_COLOR, PADDING_GENERAL, WHITE_COLOR, WIDTH_LAYOUT_GENERAL } from "../../styles/globalStyles";
import MyCardNews from "../MyCardNews/MyCardNews";

const { width } = Dimensions.get("window");

interface MyTabsInterface {
    data: {
        title: string,
        content: ReactNode
    }[],
    widthHeaderTabItem?: number,
}

const MyTabs: FC<MyTabsInterface> = (props) => {

    const { data, widthHeaderTabItem } = props;

    const [indexActive, setIndexActive] = useState(0);

    return (
        <View style={{ flex: 1}}>

            <View style={{flexDirection:"row"}} >
                {
                    data.map(
                        (item, index) => {
                            return (

                                <TouchableOpacity onPress={() => {
                                    setIndexActive(index)
                                }} key={index}>
                                    <View style={{
                                        borderBottomWidth: 2,
                                        borderBottomColor: index == indexActive ? BASE_COLOR : "transparent",
                                        padding: PADDING_GENERAL,
                                        backgroundColor: WHITE_COLOR,
                                        width: widthHeaderTabItem ? widthHeaderTabItem : width / 3,
                                    }}>
                                        <Text style={{ textAlign: 'center' }}>{item.title}</Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        }
                    )
                }
            </View>

            {/* <FlatList
                style={{ width: '100%', backgroundColor: '#fff' }}
                data={data}
                renderItem={({ item, index }) => {

                    return (

                        <TouchableOpacity onPress={() => {
                            setIndexActive(index)
                        }}>
                            <View style={{
                                borderBottomWidth: 2,
                                borderBottomColor: index == indexActive ? BASE_COLOR : "transparent",
                                padding: PADDING_GENERAL,
                                backgroundColor: WHITE_COLOR,
                                width: widthHeaderTabItem ? widthHeaderTabItem : width / 3,
                            }}>
                                <Text style={{ textAlign: 'center' }}>{item.title}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                }}
                keyExtractor={item => item.title}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            /> */}

            <ScrollView style={{ padding: PADDING_GENERAL / 2}}>
                {
                    data[indexActive].content
                }
                <View style={{width:"100%",height:20}}/>
            </ScrollView>
        </View>
    )
};

export default MyTabs;
