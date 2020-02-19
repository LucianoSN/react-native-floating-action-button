import React from 'react';
import { StyleSheet, View } from 'react-native';
import FloatingButton from './FloatingButton';

const Index = () => {
    return (
        <View style={styles.container}>
            <FloatingButton style={{ bottom: 100 }} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
});

export default Index;
