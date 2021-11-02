import { NavigationContainer } from '@react-navigation/native';
import axios from 'axios';
import React, { useEffect } from 'react'
import { View, Text, Alert, Button, TouchableOpacity, StyleSheet } from 'react-native'

const options = {
    method: 'POST',
    url: 'https://bravenewcoin.p.rapidapi.com/oauth/token',
    headers: {
      'content-type': 'application/json',
      'x-rapidapi-host': 'bravenewcoin.p.rapidapi.com',
      'x-rapidapi-key': '81444d2f04mshb06f4571de3bd1dp1716dajsn456674549592'
    },
    data: {
      audience: 'https://api.bravenewcoin.com',
      client_id: 'oCdQoZoI96ERE9HY3sQ7JmbACfBf55RY',
      grant_type: 'client_credentials'
    }
  };
  

const HomeScreen = ({ navigation }) => {

    useEffect(() => {
        if (sessionStorage.getItem("token") === null) {
            axios.request(options).then(function (response) {
                console.log(response.data);
                sessionStorage.setItem("token", JSON.stringify(response.data));
            }).catch(function (error) {
                console.error(error);
            });
        }
        }, [])

    return (
        <View style={styles.container}>
            {/* <TouchableOpacity 
                onPress={() => navigation.navigate('Assets')}
                style={styles.btn1}>
                    <Text>Assets</Text>
            </TouchableOpacity> */}
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    btn1: {
        padding: 10,
        backgroundColor: 'orange'
    }
})