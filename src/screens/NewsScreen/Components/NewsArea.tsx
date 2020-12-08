import React, {FC} from "react";
import {View, Text, TouchableOpacity, FlatList, StyleSheet, StatusBar} from "react-native";
import {PADDING_GENERAL, WIDTH_LAYOUT_GENERAL} from "../../../styles/globalStyles";
import MyCardNews from "../../../components/MyCards/MyCardNews";

interface NewsAreaInterface {
    title:string,
    data:any[],
}

const NewsArea: FC<NewsAreaInterface> = (props) => {

    const {title,data} = props;

    return (
        <View style={{marginBottom:3/2*PADDING_GENERAL}}>
            <View
                style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8}}>
                <Text style={{fontSize: 16,fontWeight:'bold'}}>{title}</Text>

            </View>

            <FlatList
                data={data}
                renderItem={({item}) => {
                    return (
                        <View style={{width: WIDTH_LAYOUT_GENERAL * 3 / 5, marginRight: 16}}>
                            <MyCardNews title={item.title} content={item.content} image={item.image}/>
                        </View>
                    )
                }}
                keyExtractor={item => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />

        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginRight: 16,
    },
    title: {
        fontSize: 32,
    },
});


export default NewsArea;
