import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Constant from 'expo-constants';

export default function header() {

    return (
        <View style={styles.container}>
            <Text style={styles.logo}>NEWS</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    logo: {
        color: 'white',
        fontSize: 25,
    },
    container: {
        backgroundColor: '#000000',
        height: 50,
        alignItems: 'center',
        marginTop: Constant.statusBarHeight,
    }
});
