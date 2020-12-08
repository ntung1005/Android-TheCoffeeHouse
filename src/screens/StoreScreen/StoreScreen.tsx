import React, { FC } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import MyEmptyProduct from "../../components/MyEmptyProduct/MyEmptyProduct";
import MyHeader from "../../components/MyHeader/MyHeader";
import { PADDING_GENERAL } from "../../styles/globalStyles";

const StoreScreen: FC<any> = (props) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <MapView
                style={{ flex: 1 }}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
        </SafeAreaView>
    )
};

export default StoreScreen;
