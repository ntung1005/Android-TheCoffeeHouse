import React, { FC } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { BASE_COLOR, GREY_COLOR, PADDING_GENERAL, WHITE_COLOR } from '../../../../styles/globalStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MyButton from '../../../../components/MyButton/MyButton';
import { useDispatch, useSelector } from 'react-redux';
import AuthType from '../../../../store/types/AuthType';
import { setLoginStorage } from '../../../../modules/AsyncStorage';

interface HeaderDefaultInterface {
    navigation: any
}

const HeaderDefault: FC<HeaderDefaultInterface> = (props) => {

    const { navigation } = props;

    const dispatch = useDispatch();
    const onLogin = () => {
        setLoginStorage(dispatch)
        // dispatch({
        //     type: AuthType.LOGIN
        // });

    }

    return (
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: PADDING_GENERAL,
            borderBottomColor: GREY_COLOR,
            borderBottomWidth: 1,
            backgroundColor: WHITE_COLOR
        }}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',

            }}>
                <TouchableOpacity
                    style={{ marginRight: 8 }}
                >
                    <Ionicons name={"person-outline"} size={26} color={GREY_COLOR} />
                </TouchableOpacity>

                <MyButton
                    onPress={() => {
                        onLogin();

                    }}
                    colorBorder={BASE_COLOR} backgroundColor={'transparent'} textColor={BASE_COLOR}
                    contentText={'Đăng nhập'} local={'center'} borderRadius={100} />
            </View>

            <TouchableOpacity onPress={() => {
                navigation.navigate('NotificationScreen');
            }}>
                <EvilIcons name={"bell"} size={26} color={GREY_COLOR} />
            </TouchableOpacity>
        </View>
    )
};

export default HeaderDefault;