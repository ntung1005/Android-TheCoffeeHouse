import React, {FC, useRef, useState} from "react";
import {View, Text, StyleSheet, Animated, FlatList, TouchableOpacity} from "react-native";
import MyInput from "../MyInput/MyInput";
import {FONT_BASE, GREY_COLOR, PADDING_GENERAL} from "../../styles/globalStyles";

const MyAutoComplete: FC<any> = (props) => {
    const {} = props;

    const ref = useRef();

    const data = ["aaa", "ads", "asf", "aaa", "ads", "asf", "aaa", "ads", "asf", "aaa", "ads", "asf"]

    const [isShowAutoComplete, setIsAutoComplete] = useState(false);

    return (
        <View>
            <MyInput onChangeText={() => {
            }} value={""} isFloatLabel={true}
                     textFloatLabel={"Input"}
                     placeholder={""}
                     onFocus={() => {
                         if(isShowAutoComplete){
                             setIsAutoComplete(false);
                         }
                         else setIsAutoComplete(true);
                     }}

            />

            <View>
                {
                    isShowAutoComplete &&
                    <FlatList data={data}
                              ref={() => ref}
                              keyExtractor={(item, index) => 'key' + index}
                              pagingEnabled
                              scrollEnabled
                              snapToAlignment="center"
                              scrollEventThrottle={16}
                              decelerationRate={"fast"}
                              showsHorizontalScrollIndicator={false}
                              renderItem={({item}) => {
                                  return (
                                      <TouchableOpacity style={styles.renderItem}>
                                          <Text style={styles.renderItemText}>abc</Text>
                                      </TouchableOpacity>
                                  )
                              }}
                              style={styles.wrapRenderItem}

                    />
                }

            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    wrapRenderItem: {
        height: 200,
        borderWidth: 0.5,
        borderColor: GREY_COLOR,

    },
    renderItem: {
        borderBottomWidth: 0.5,
        borderBottomColor: GREY_COLOR,
        padding: 12
    },

    renderItemText: {
        fontSize: FONT_BASE
    }
});

export default MyAutoComplete;
