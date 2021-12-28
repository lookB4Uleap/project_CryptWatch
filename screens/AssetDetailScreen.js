import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux';



const AssetDetailScreen = ({ route, navigation}) => {
    const {item, details} = route.params
    // const [details, setDetails] = useState({})
    // const auth = useSelector(state => state.auth.value)

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

    return (
        <View>
            <Text>{item.id}</Text>
            <Text>{details.marketCap}</Text>
        </View>
    )
}

export default AssetDetailScreen
