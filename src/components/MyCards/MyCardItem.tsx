import React, {FC, useState} from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity, Modal, TouchableNativeFeedback} from "react-native";
import {BASE_COLOR, GREY_COLOR, OPACITY_COLOR, PADDING_GENERAL, WHITE_COLOR} from "../../styles/globalStyles";
import {functionSubString} from "../../modules/helper/functionSubString";
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {functionFormatNumber} from "../../modules/helper/functionFormatNumber";
import MyCheckButton from "../MyCheckButton/MyCheckButton";
import MyLine from "../MyLine";
import MyButton from "../MyButton/MyButton";

interface MyCardItemInterface {
    image: string,
    title: string,
    price: string | number
}

const MyCardItem: FC<MyCardItemInterface> = (props) => {
    const {image, title, price} = props;

    const [isShowModal, setIsShowModal] = useState(false);

    const onShowModal = () => {
        setIsShowModal(!isShowModal)
    };

    const renderOutSideTouchable = (onTouch: any, children: any) => {

        return (
            <TouchableNativeFeedback onPress={onTouch} style={{flex: 1, width: '100%'}}>
                <View style={{
                    flex: 1, width: '100%', backgroundColor: OPACITY_COLOR,
                    flexDirection: 'row', alignItems: 'center', justifyContent: 'center'
                }}>
                    {children}
                </View>
            </TouchableNativeFeedback>
        )
    };

    const [selectSize, setSelectSize] = useState<"L" | "M" | "S">("L");
    const [selectTopping, setSelectTopping] = useState(true);
    const [quantityOrder, setQuantityOrder] = useState(1);

    const onChangeSize = (size: "L" | "M" | "S") => {
        setSelectSize(size)
    };

    const onChangeSelectTopping = () => {
        setSelectTopping(!selectTopping)
    };

    const onChangeQuantityOrder = (value: number) => {
        if (quantityOrder == 1 && value > 0) {
            setQuantityOrder(quantityOrder + value)
        }
        if (quantityOrder > 1) {
            setQuantityOrder(quantityOrder + value)
        } else {
            if (value > 0) {
                setQuantityOrder(quantityOrder + value)
            }
        }
    };

    return (
        <View style={{backgroundColor: WHITE_COLOR, borderRadius: 8, overflow: 'hidden'}}>
            <Image source={{uri: image}} style={{width: '100%', height: 160}}/>
            <View style={{padding: 8, paddingBottom: 20, borderBottomColor: GREY_COLOR, borderBottomWidth: 0.5}}>
                <Text>{functionSubString(title, 22)}</Text>
            </View>
            <View style={{padding: 8, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <Text style={{fontWeight: 'bold'}}>{functionFormatNumber(price)} vnđ</Text>
                <TouchableOpacity style={{
                    width: 22,
                    height: 22,
                    borderColor: BASE_COLOR,
                    borderWidth: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 24
                }}
                                  onPress={onShowModal}
                >
                    <Ionicons name={"add"} size={16} color={BASE_COLOR}/>
                </TouchableOpacity>
            </View>

            <Modal visible={isShowModal} transparent={true} onRequestClose={onShowModal}>
                {renderOutSideTouchable(onShowModal,

                    <View style={{padding: 2 * PADDING_GENERAL, width: '100%'}}>
                        <View style={{width: '100%', backgroundColor: '#fff', borderRadius: 8}}>
                            <View style={{}}>
                                <View style={{flexDirection: 'row', padding: PADDING_GENERAL}}>
                                    <Image source={{uri: image}}
                                           style={{width: 68, height: 68, borderRadius: 8, marginRight: 12}}/>
                                    <View style={{flex: 1}}>
                                        <Text style={{fontWeight: 'normal', marginBottom: 8}}>{title}</Text>
                                        <Text style={{fontWeight: 'normal'}}>{functionFormatNumber(price)} vnđ</Text>
                                    </View>
                                </View>

                                <View>
                                    <MyLine/>
                                    <View style={[styles.selectOption, styles.selectOptionTitle]}>
                                        <Text style={{fontSize: 16}}>Size</Text>
                                    </View>
                                    <MyLine/>
                                    <View style={{paddingHorizontal: PADDING_GENERAL}}>

                                        <TouchableOpacity
                                            style={styles.selectOption}
                                            onPress={() => onChangeSize("L")}
                                        >
                                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                                <MyCheckButton isActive={selectSize == "L"} style={{marginRight: 20}}/>
                                                <Text style={{fontSize: 15}}>Lớn</Text>
                                            </View>
                                            <Text style={{fontSize: 15}}>+ {functionFormatNumber(10000)} vnđ</Text>
                                        </TouchableOpacity>
                                        <MyLine/>

                                        <TouchableOpacity
                                            style={styles.selectOption}
                                            onPress={() => onChangeSize("M")}
                                        >
                                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                                <MyCheckButton isActive={selectSize == "M"} style={{marginRight: 20}}/>
                                                <Text style={{fontSize: 15}}>Lớn</Text>
                                            </View>
                                            <Text style={{fontSize: 15}}>+ {functionFormatNumber(10000)} vnđ</Text>
                                        </TouchableOpacity>
                                        <MyLine/>

                                        <TouchableOpacity
                                            onPress={() => onChangeSize("S")}
                                            style={styles.selectOption}>
                                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                                <MyCheckButton isActive={selectSize == "S"} style={{marginRight: 20}}/>
                                                <Text style={{fontSize: 15}}>Nhỏ</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>

                                <View>
                                    <View style={[styles.selectOption, styles.selectOptionTitle]}>
                                        <Text style={{fontSize: 16}}>Topping</Text>
                                    </View>
                                    <View style={{paddingHorizontal: PADDING_GENERAL}}>
                                        <TouchableOpacity
                                            style={styles.selectOption}
                                            onPress={() => {
                                                onChangeSelectTopping()
                                            }}
                                        >
                                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                                <MyCheckButton type={"square"} isActive={selectTopping}
                                                               style={{marginRight: 20}}/>
                                                <Text style={{fontSize: 15}}>Lớn</Text>
                                            </View>
                                            <Text style={{fontSize: 15}}>+ {functionFormatNumber(10000)} vnđ</Text>
                                        </TouchableOpacity>

                                    </View>
                                </View>

                                <View>
                                    <View style={[styles.selectOption, styles.selectOptionTitle]}>
                                        <Text style={{fontSize: 16}}>Giới thiệu món</Text>
                                    </View>
                                    <View style={{
                                        paddingHorizontal: 2 * PADDING_GENERAL,
                                        paddingVertical: PADDING_GENERAL
                                    }}>
                                        <Text style={{lineHeight: 24, fontSize: 15}}>Quả sơ ri chín mọng 100% tự nhiên
                                            từ Gò Công cùng thanh long đỏ cho vị
                                            chua, ngọt thanh mát thiệt đã. Thêm trân châu trắng giòn dai để cuộc hèn hò
                                            cùng crush thêm rôm rả</Text>

                                    </View>
                                </View>

                                {/*BTN*/}
                                <View style={{
                                    padding: PADDING_GENERAL,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    justifyContent: 'space-between'
                                }}>
                                    <View style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
                                        <TouchableOpacity
                                            style={{
                                                width: 32,
                                                height: 32,
                                                borderColor: BASE_COLOR,
                                                borderWidth: 1,
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                borderRadius: 24
                                            }}
                                            onPress={() => {
                                                onChangeQuantityOrder(-1)
                                            }}
                                        >
                                            <AntDesign name={"minus"} size={16} color={BASE_COLOR}/>
                                        </TouchableOpacity>

                                        <View style={{marginHorizontal: 12}}>
                                            <Text style={{fontSize: 24, fontWeight: 'normal'}}>{quantityOrder}</Text>
                                        </View>

                                        <TouchableOpacity
                                            style={{
                                                width: 32,
                                                height: 32,
                                                borderColor: BASE_COLOR,
                                                backgroundColor: BASE_COLOR,
                                                borderWidth: 1,
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                borderRadius: 24
                                            }}
                                            onPress={() => {
                                                onChangeQuantityOrder(1)
                                            }}
                                        >
                                            <Ionicons name={"add"} size={16} color={WHITE_COLOR}/>

                                        </TouchableOpacity>
                                    </View>

                                    <MyButton colorBorder={BASE_COLOR} backgroundColor={BASE_COLOR}
                                              textColor={WHITE_COLOR} contentText={"59.000 đ"} local={'center'}

                                              style={{
                                                  paddingLeft: 32,
                                                  paddingRight: 32,
                                                  paddingTop: 12,
                                                  paddingBottom: 12
                                              }}/>
                                </View>

                            </View>
                        </View>
                    </View>
                )}
            </Modal>
        </View>
    )
};

const styles = StyleSheet.create({
    selectOption: {
        paddingVertical: PADDING_GENERAL,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    selectOptionTitle: {
        backgroundColor: OPACITY_COLOR,
        paddingHorizontal: PADDING_GENERAL,
    }
});

export default MyCardItem;
