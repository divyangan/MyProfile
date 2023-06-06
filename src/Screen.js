import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import NavigationBar from './Navigation';
const Screen = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/visible_logo_new.png')} style={styles.logo} />
            <View style={styles.line} />
            <View style={styles.profileContainer}>
                <Image source={require('../assets/mypic.png')} style={styles.pic} />
                <View style={styles.nameContainer}>
                    <Text style={styles.name}>Divyangan Shyam</Text>
                    <Text style={styles.designation}>Engr II -Software Development</Text>
                </View>
            </View>
            <NavigationBar/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        alignItems: 'flex-end',
        padding: 20,
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 30,
    },
    pic: {
        width: 130,
        height: 180,
        borderRadius: 5,
        marginRight: 20,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginRight: 20,
    },
    logo: {
        width: 150,
        height: 70,
        marginEnd: -30,
    },
    line: {
        height: 3,
        backgroundColor: '#1602F7',
        width: '100%',
    },
    designation: {
        fontSize: 12,
        color: 'gray',
    },
    nameContainer: {
        flexDirection: 'column',
    },
});

export default Screen;