import React from 'react';

import {
    StyleSheet,
    Text,
    View,
    Animated,
    TouchableWithoutFeedback,
} from 'react-native';

import { Entypo, AntDesign } from '@expo/vector-icons';

const FloatingButton = ({ style, open }) => {
    const state = {
        animation: new Animated.Value(0),
    };

    const toggleMenu = () => {
        const toValue = open ? 0 : 1;

        Animated.spring(state.animation, {
            toValue,
            friction: 5,
        }).start();

        open = !open;
    };

    const pinStyle = {
        transform: [
            { scale: state.animation },
            {
                translateY: state.animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -80],
                }),
            },
        ],
    };

    const thumbStyle = {
        transform: [
            { scale: state.animation },
            {
                translateY: state.animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -140],
                }),
            },
        ],
    };

    const heartStyle = {
        transform: [
            { scale: state.animation },
            {
                translateY: state.animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0, -200],
                }),
            },
        ],
    };

    const opacity = state.animation.interpolate({
        inputRange: [0, 0.5, 1],
        outputRange: [0, 0, 1],
    });

    const rotation = {
        transform: [
            {
                rotate: state.animation.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0deg', '45deg'],
                }),
            },
        ],
    };

    return (
        <View style={[styles.container, style]}>
            <TouchableWithoutFeedback>
                <Animated.View
                    style={[
                        styles.button,
                        styles.secondary,
                        heartStyle,
                        opacity,
                    ]}
                >
                    <AntDesign name="hearto" size={20} color="#F82A4B" />
                </Animated.View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback>
                <Animated.View
                    style={[
                        styles.button,
                        styles.secondary,
                        thumbStyle,
                        opacity,
                    ]}
                >
                    <Entypo name="thumbs-up" size={20} color="#F82A4B" />
                </Animated.View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback>
                <Animated.View
                    style={[styles.button, styles.secondary, pinStyle, opacity]}
                >
                    <Entypo name="location-pin" size={20} color="#F82A4B" />
                </Animated.View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={toggleMenu}>
                <Animated.View
                    style={[styles.button, styles.menu, rotation, opacity]}
                >
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
