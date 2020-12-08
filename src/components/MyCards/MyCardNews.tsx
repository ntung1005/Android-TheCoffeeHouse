import React, {FC} from "react";
import {View, Text, StyleSheet, Image} from "react-native";
import MyButton from "../MyButton/MyButton";
import {BASE_COLOR, PADDING_GENERAL, WHITE_COLOR} from "../../styles/globalStyles";
import {functionSubString} from "../../modules/helper/functionSubString";

interface MyCardNewsInterface {
    image: string,
    title: string,
    content: string
}

const MyCardNews: FC<MyCardNewsInterface> = (props) => {
    const {image, title, content} = props;

    return (
        <View style={styles.wrapCard}>
            <Image source={{uri:image}} style={{width: "100%", height: 120}}/>

            <View style={styles.wrapContent}>
                <View style={styles.content}>
                    <Text style={{fontWeight: 'bold',lineHeight:20}}>{functionSubString(title,48,"...")}</Text>
                    <Text style={{lineHeight:18}}>{functionSubString(content,92)}</Text>
                </View>
                <MyButton colorBorder={BASE_COLOR} backgroundColor={'transparent'} textColor={BASE_COLOR}
                          contentText={'Chi tiết'} local={'flex-start'} borderRadius={100}/>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    wrapCard: {
        backgroundColor: WHITE_COLOR,
        borderRadius: 8,
        overflow: 'hidden'
    },
    wrapContent: {
        padding: PADDING_GENERAL
    },
    content: {
        marginBottom: 20
    }
});

export default MyCardNews;
