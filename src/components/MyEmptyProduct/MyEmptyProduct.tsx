import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { BASE_COLOR, FONT_BASE, PADDING_GENERAL, WHITE_COLOR } from '../../styles/globalStyles';
import MyButton from '../MyButton/MyButton';

interface MyEmptyProductInterface {

}

const MyEmptyProduct: FC<MyEmptyProductInterface> = (props) => {

    const { } = props;

    return (
        <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ width: 140, height: 140, backgroundColor: 'green' }} />
            </View>

            <Text style={{ textAlign: 'center', fontSize: 17,paddingTop:PADDING_GENERAL*2 , paddingBottom: PADDING_GENERAL*3 }}>Day la doan mo ta</Text>

            <MyButton colorBorder={"transparent"} backgroundColor={BASE_COLOR} width={"100%"}
                textColor={WHITE_COLOR} contentText={"abc"} local={"center"}
                borderRadius={100}
                style={{ paddingTop: PADDING_GENERAL, paddingBottom: PADDING_GENERAL }}
            />

        </View>
    )
};

export default MyEmptyProduct;