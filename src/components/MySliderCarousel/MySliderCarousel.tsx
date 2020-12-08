import React, {FC, useState, useEffect,useRef} from "react";
import {View, Text, Dimensions, FlatList, Animated, StyleSheet} from "react-native";


const {width, height} = Dimensions.get('window');



interface MySliderCarouselInterface {
    data:any[],
    renderItem:any,
}

const MySliderCarousel: FC<MySliderCarouselInterface> = (props) => {

    const {data,renderItem} = props;

    const ref = useRef(null);

    const scrollX = new Animated.Value(0);
    let position = Animated.divide(scrollX, width);
    const [dataList, setDataList] = useState(data);

    useEffect(() => {
        setDataList(data);
        infiniteScroll(dataList)
    });

    function infiniteScroll(dataList:any[]) {
        const numberOfData = dataList.length;
        let scrollValue = 0, scrolled = 0;

        setInterval(function () {
            scrolled++;
            if (scrolled < numberOfData)
                scrollValue = scrollValue + width;

            else {
                scrollValue = 0;
                scrolled = 0
            }

        }, 3000)
    }

    if (dataList && dataList.length) {
        return (
            <View>
                <FlatList data={dataList}
                          ref={() => ref}
                          keyExtractor={(item, index) => 'key' + index}
                          horizontal
                          pagingEnabled
                          scrollEnabled
                          snapToAlignment="center"
                          scrollEventThrottle={16}
                          decelerationRate={"fast"}
                          showsHorizontalScrollIndicator={false}
                          renderItem={renderItem}
                          onScroll={Animated.event(
                              [{nativeEvent: {contentOffset: {x: scrollX}}}]
                          )}
                />

                <View style={styles.dotView}>
                    {dataList.map((item, i) => {
                        let opacity = position.interpolate({
                            inputRange: [i - 1, i, i + 1],
                            outputRange: [0.3, 1, 0.3],
                            extrapolate: 'clamp'
                        });
                        return (
                            <Animated.View
                                key={i}
                                style={{
                                    opacity,
                                    height: 10,
                                    width: 10,
                                    backgroundColor: '#595959',
                                    margin: 8,
                                    borderRadius: 5
                                }}
                            />
                        )
                    })}

                </View>
            </View>
        )
    }

    return null
};


const styles = StyleSheet.create({
    dotView: {
        flexDirection: 'row',
        justifyContent: 'center'
    },


});

export default MySliderCarousel;