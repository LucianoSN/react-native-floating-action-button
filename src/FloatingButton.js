import React from 'react';

import {
    StyleSheet,
    Text,
    View,
    Animated,
    TouchableWithoutFeedback,
} from 'react-native';

import { Entypo, AntDesign } from '@expo/vector-icons';

const FloatingButton = ({ style }) => {
    return (
        <View style={[styles.container, style]}>
            <TouchableWithoutFeedback>
                <Animated.View style={[styles.button, styles.secondary]}>
                    <AntDesign name="hearto" size={20} color="#F82A4B" />
                </Animated.View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback>
                <Animated.View style={[styles.button, styles.secondary]}>
                    <Entypo name="thumbs-up" size={20} color="#F82A4B" />
                </Animated.View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback>
                <Animated.View style={[styles.button, styles.secondary]}>
                    <Entypo name="location-pin" size={20} color="#F82A4B" />
                </Animated.View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback>
                <Animated.View style={[styles.button, styles.menu]}>
                    <AntDesign name="plus" size={24} color="#fff" />
                </Animated.View>
            </TouchableWithoutFeedback>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        position: 'absolute',
    },
    button: {
        position: 'absolute',
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        shadowRadius: 10,
        shadowColor: '#F02A4B',
        shadowOpacity: 0.3,
        shadowOffset: { height: 10 },
        elevation: 3,
        marginTop: 3,
    },
    menu: {
        backgroundColor: '#F02A4B',
    },
    secondary: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: '#FFF',
    },
});

export default FloatingButton;
