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
            <Text>Button</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        position: 'absolute',
    },
});

export default FloatingButton;
