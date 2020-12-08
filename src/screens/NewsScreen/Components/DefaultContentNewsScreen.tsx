import React, {FC, useEffect} from "react";
import {View, Text, Animated, Easing} from "react-native";
import {BASE_COLOR, PADDING_GENERAL, WHITE_COLOR} from "../../../styles/globalStyles";

const DefaultContentNewsScreen: FC<any> = (props) => {

        const spinValue = new Animated.Value(0);

        useEffect(() => {
            runRotateImage();
        }, []);

        const runRotateImage = () => {
            Animated.timing(
                spinValue,
                {
                    toValue: 1,
                    duration: 6000,
                    easing: Easing.linear,
                    useNativeDriver: true  // To make use of native driver for performance
                }
            ).start(async () => {
                await spinValue.setValue(0);
                await runRotateImage()
            });
        };

        const spin = spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        });

        return (
            <View style={{marginBottom: 3 / 2 * PADDING_GENERAL}}>
                <View style={{}}>
                    <View style={{width: '100%', height: 100, borderRadius: 8, backgroundColor: 'red'}}/>
                </View>

                <View>
                    <Text style={{fontSize: 16, fontWeight: 'bold', marginVertical: 8}}>Nhạc đang phát tại Nhà</Text>
                    <View style={{backgroundColor: WHITE_COLOR, padding: PADDING_GENERAL}}>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Animated.Image
                                source={{uri: 'https://product.hstatic.net/1000075078/product/cf-sua-trung-muoi_1x1_60cc3fbc3c0147ca889fdf0312ba5c14_large.jpg'}}
                                style={{
                                    width: 60, height: 60,
                                    borderRadius: 30, marginRight: 12,
                                    transform: [{rotate: spin}]
                                }}/>

                            <View style={{flex: 1}}>
                                <Text style={{fontWeight: 'bold'}}>For You</Text>
                                <Text style={{fontWeight: 'bold', color: BASE_COLOR}}>eliance</Text>
                                <Text>Now playing</Text>
                            </View>
                        </View>

                    </View>
                </View>
            </View>
        )
    }
;

export default DefaultContentNewsScreen;
