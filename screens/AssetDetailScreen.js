import { useFocusEffect } from '@react-navigation/native';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux';

const ViewDetails = (props) => {
    return (
        <View style={styles.detailBox}>
            <Text style={styles.detailName}>{props.name}</Text>
            <Text style={styles.detail}>{props.value}</Text>
        </View>
    )
}

const AssetDetailScreen = ({ route, navigation}) => {
    const {item} = route.params
    const [details, setDetails] = useState({})
    const auth = useSelector(state => state.auth.value)

    // var options = {
    //     method: 'GET',
    //     url: 'https://bravenewcoin.p.rapidapi.com/market-cap',
    //     params: {assetId: item.id},
    //     headers: {
    //       authorization: `Bearer ${auth.access_token}`,
    //       'x-rapidapi-host': 'bravenewcoin.p.rapidapi.com',
    //       'x-rapidapi-key': '81444d2f04mshb06f4571de3bd1dp1716dajsn456674549592'
    //     }
    // };
      
    // useEffect(() => {
    //     // if (sessionStorage.getItem('token') != null) {
    //     //     axios.request(options).then(function (response) {
    //     //         // console.log(response.data.content[0])
    //     //         setDetails(response.data.content[0])
    //     //     }).catch(function (error) {
    //     //         console.error(error)
    //     //     });
    //     // }
        
    // })

    const getAssetDetails = (item) => {
        var options = {
            method: 'GET',
            url: 'https://bravenewcoin.p.rapidapi.com/market-cap',
            params: {assetId: item.id},
            headers: {
              authorization: `Bearer ${auth.access_token}`,
              'x-rapidapi-host': 'bravenewcoin.p.rapidapi.com',
              'x-rapidapi-key': '81444d2f04mshb06f4571de3bd1dp1716dajsn456674549592'
            }
        }
    
        if (sessionStorage.getItem('token') != null) {
            axios.request(options).then(function (response) {
                // console.log(response.data.content[0])
                setDetails(response.data.content[0])
            }).catch(function (error) {
                console.error(error)
            });
        }
    }

    useEffect(() => {
        getAssetDetails(item)
        return () => {
            setDetails({})
        }
    }, [])

    useEffect(() => console.log(details))

    return (
        details
        && Object.keys(details).length === 0
        && Object.getPrototypeOf(details) === Object.prototype ?
        <></> :
        <ScrollView>
            {/* <Text>{item.id}</Text> */}
            {/* <Text>{details?.marketCap}</Text> */}
            <View style={styles.detailsContainer}>
                <ViewDetails name="Market Cap" value={parseFloat(details.marketCap).toFixed(2)} />
                <ViewDetails name="Market Cap Rank" value={details.marketCapRank} />
                <ViewDetails name="Price" value={parseFloat(details.price).toFixed(6)} />
                <ViewDetails name="Total Market Cap" value={parseFloat(details.totalMarketCap).toFixed(2)} />
                <ViewDetails name="Total Supply" value={details.totalSupply} />
                <ViewDetails name="Volume" value={parseFloat(details.volume).toFixed(2)} />
                <ViewDetails name="Volume Rank" value={details.volumeRank} />
            </View>
        </ScrollView>
    )
}

export default AssetDetailScreen

const styles = StyleSheet.create({
    detailsContainer: {
        width: '100%',
        padding: 5,
    },
    detailBox: {
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        padding: 10,
        backgroundColor: 'azure',
        margin: 2,
    },
    detailName: {
        fontSize: 20,
    },
    detail: {
        fontSize: 20,
    }
})