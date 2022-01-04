import { NavigationContainer } from '@react-navigation/native';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { View, Text, Alert, Button, TouchableOpacity, StyleSheet, ActivityIndicator, Linking, ScrollView } from 'react-native'
import WebView from 'react-native-webview';
import { useDispatch, useSelector } from 'react-redux';
// import getAssets from '../api_calls/getAssests';
// import getAuth from '../api_calls/getAuth';
// import getNews from '../api_calls/getNews';
// import { setAssets } from '../reducers/assets/assetsSlice';
import { setAuth } from '../reducers/auth/authSlice';

// const options = {
//     method: 'POST',
//     url: 'https://bravenewcoin.p.rapidapi.com/oauth/token',
//     headers: {
//       'content-type': 'application/json',
//       'x-rapidapi-host': 'bravenewcoin.p.rapidapi.com',
//       'x-rapidapi-key': '81444d2f04mshb06f4571de3bd1dp1716dajsn456674549592'
//     },
//     data: {
//       audience: 'https://api.bravenewcoin.com',
//       client_id: 'oCdQoZoI96ERE9HY3sQ7JmbACfBf55RY',
//       grant_type: 'client_credentials'
//     }
// };



const HomeScreen = ({ navigation }) => {
    const getAuth = () => {

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
        }
    
        axios.request(options).then(function (response) {
            console.log(response.data);
            sessionStorage.setItem("token", JSON.stringify(response.data));
            dispatch(setAuth(response.data))
            // return response.data
        }).catch(function (error) {
            console.error(error);
        })
    }

    // const getAssets = () => {
    //     const options = {
    //         method: 'GET',
    //         url: 'https://bravenewcoin.p.rapidapi.com/asset',
    //         params: {status: 'ACTIVE'},
    //         headers: {
    //           'x-rapidapi-host': 'bravenewcoin.p.rapidapi.com',
    //           'x-rapidapi-key': '81444d2f04mshb06f4571de3bd1dp1716dajsn456674549592'
    //         }
    //     }
    
    //     axios.request(options).then((response) => {
    //         console.log(response.data)
    //         // setData(response.data.content)
    //         dispatch(setAssets(response.data))
    //     }).catch(function (error) {
    //         console.error(error)
    //     })
    // }

    const options = {
        method: 'GET',
        url: 'https://yh-finance.p.rapidapi.com/auto-complete',
        params: {q: 'crytocurrency', region: 'US'},
        headers: {
          'x-rapidapi-host': 'yh-finance.p.rapidapi.com',
          'x-rapidapi-key': '81444d2f04mshb06f4571de3bd1dp1716dajsn456674549592'
        }
      }
      
    const getNews = () => {
          axios.request(options).then(function (response) {
              console.log(response.data);
              setNews(response.data.news)
              // return response.data.news
          }).catch(function (error) {
              console.error(error);
          })
      }

    const [news, setNews] = useState([])
    const auth = useSelector(state => state.auth.value)
    const assets = useSelector(state => state.assets.value)
    const dispatch = useDispatch()

    useEffect(() => {
        // if (sessionStorage.getItem("token") === null) {
        //     // axios.request(options).then(function (response) {
        //     //     console.log(response.data);
        //     //     sessionStorage.setItem("token", JSON.stringify(response.data));
        //     //     dispatch(setAuth(response.data))
        //     // }).catch(function (error) {
        //     //     console.error(error);
        //     // });
            
        // }
        getAuth()
        // getAssets()
        getNews()
        // console.log(news)
        }, [])

    return (
        (auth && assets && news) ?  
        <ScrollView style={styles.container}>
            {/* <TouchableOpacity 
                onPress={() => navigation.navigate('Assets')}
                style={styles.btn1}>
                    <Text>Assets</Text>
            </TouchableOpacity> */}
            {news.map(
                n => <TouchableOpacity key={n.uuid} style={styles.news} onPress = { () => Linking.openURL(n.link) }>
                    <Text style={styles.newsText}>{n.title}</Text>
                    <Text style={styles.subText}>{n.publisher}</Text>
                    <Text style={styles.subText}>{Date(n.providerPublishTime * 1000)}</Text>
                </TouchableOpacity> 
            )}
        </ScrollView> : 
        <ActivityIndicator />
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        padding: 5
    },
    btn1: {
        padding: 10,
        backgroundColor: 'orange'
    },
    news: {
        padding: 10,
        margin: 5,
        backgroundColor: 'white',
        borderRadius: 5
    },
    newsText: {
        fontSize: 18
    },
    subText: {
        fontSize: 12,
        color: "grey"
    }
})