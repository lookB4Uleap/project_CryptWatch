import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'



const AssetScreen = ({ navigation }) => {
    const [data, setData] = useState([])
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    const options = {
        method: 'GET',
        url: 'https://bravenewcoin.p.rapidapi.com/asset',
        params: {status: 'ACTIVE'},
        headers: {
          'x-rapidapi-host': 'bravenewcoin.p.rapidapi.com',
          'x-rapidapi-key': '81444d2f04mshb06f4571de3bd1dp1716dajsn456674549592'
        }
    }

    // const canceloptions = {
    //     method: 'GET',
    //     url: 'https://bravenewcoin.p.rapidapi.com/asset',
    //     cancelToken: source.token,
    //     headers: {
    //       'x-rapidapi-host': 'bravenewcoin.p.rapidapi.com',
    //       'x-rapidapi-key': '81444d2f04mshb06f4571de3bd1dp1716dajsn456674549592'
    //     }
    // }

    const getAssets = () => {
        axios.request(options).then((response) => {
            console.log(response.data)
            setData(response.data.content)
        }).catch(function (error) {
            console.error(error)
        })
        // console.log(data)
    }

    useEffect(() => {
        getAssets()
        // console.log(data[1800])
        return () => {
            setData([])
            console.log(data)
        }
    }, [])

    const details = (item) => {
        navigation.navigate("Details",{
            item: item
        })
    }

    return (
        <ScrollView>
            {/* {data.map((item) => 
                <Text key={item.id}>{item.name}</Text>
            )}  */}
            <FlatList 
                data={data}
                renderItem={
                    ({item}) => 
                        <TouchableOpacity
                            style={styles.box}
                            onPress={() => details(item)}
                        >
                            <Text>{item.name}</Text>
                        </TouchableOpacity>
                }
                // keyExtractor={(item) => item.id}
                // extraData={data}
            />
        </ScrollView>
    )
}

export default AssetScreen

const styles = StyleSheet.create({
    box: {
        padding: 10,
        backgroundColor: 'azure',
        margin: 2
    }
})