import React, { FC } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { OPACITY_COLOR, PADDING_GENERAL, WHITE_COLOR } from '../../styles/globalStyles';

interface MyHeaderInterface {
    onClose: () => void,
    title: string,
    onOtherEvent?: () => void,
}

const MyHeader: FC<MyHeaderInterface> = (props) => {

    const { onClose, title, onOtherEvent } = props;

    return (
        <View style={styles.wrapHeader}>
            <View>
                <TouchableOpacity onPress={onClose}>
                    <EvilIcons name="close" size={24} />
                </TouchableOpacity>
            </View>

            <View>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
                    {title}
                </Text>
            </View>

            <View>
                {
                    onOtherEvent ?
                    <TouchableOpacity onPress={onOtherEvent}>
                        <SimpleLineIcons name="list" size={20} />
                    </TouchableOpacity>
                    :
                    <View style={{width:24}}/>
                }

            </View>

        </View>
    )
};

const styles = StyleSheet.create({
    wrapHeader: {
        paddingHorizontal: PADDING_GENERAL,
        paddingVertical: PADDING_GENERAL * 3 / 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: WHITE_COLOR,
        borderBottomColor: OPACITY_COLOR,
        borderBottomWidth: 0.5
    }
});

export default MyHeader;