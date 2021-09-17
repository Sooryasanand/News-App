import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function list() {
    return (
        <View>
            <View style={styles.container}>
                
                <View style={styles.text}>
                    <Text style={styles.title}>Michael Schumacher Netflix documentary shines light on life and career of Formula 1 legend</Text>
                    <Text style={styles.time}>Posted 11 hours ago</Text>
                </View>
                <View style={styles.image}>
                <Image style={styles.image} source={{uri: 'https://live-production.wcms.abc-cdn.net.au/4533497749c5919faf89614b21fae061?impolicy=wcms_crop_resize&cropH=563&cropW=1000&xPos=0&yPos=103&width=862&height=485'}}/> 
                </View>
                <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 1,
                    }}
                />
            </View>
            <View
                style={{
                    alignItems: 'center',
                    borderBottomColor: '#f2f2f2',
                    width: '80%',
                    marginTop: 20,
                    marginLeft: 40,
                    borderBottomWidth: 1,
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        marginLeft: 10,
        marginRight: 10
    },
    text: {
        width: '60%'
    }, 
    title:{
        color: 'black',
        fontSize: 20,
        marginTop: 10
    },
    time: {
        marginTop: 10
    },
    image: {
        marginTop: 15,
        width: 140,
        height: 100,
        marginRight: 10
    }
});
