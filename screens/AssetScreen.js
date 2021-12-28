import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, ScrollView, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { useSelector } from 'react-redux'
import getAssetDetails from '../api_calls/getAssestDetails'
import getAssets from '../api_calls/getAssests'



const AssetScreen = ({ navigation }) => {
    const [data, setData] = useState([])
    const [search, setSearch] = useState('')
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();
    const assets = useSelector(state => state.assets.value)
    const [details, setDetails] = useState({})
    const auth = useSelector(state => state.auth.value)

    // const options = {
    //     method: 'GET',
    //     url: 'https://bravenewcoin.p.rapidapi.com/asset',
    //     params: {status: 'ACTIVE'},
    //     headers: {
    //       'x-rapidapi-host': 'bravenewcoin.p.rapidapi.com',
    //       'x-rapidapi-key': '81444d2f04mshb06f4571de3bd1dp1716dajsn456674549592'
    //     }
    // }

    // const canceloptions = {
    //     method: 'GET',
    //     url: 'https://bravenewcoin.p.rapidapi.com/asset',
    //     cancelToken: source.token,
    //     headers: {
    //       'x-rapidapi-host': 'bravenewcoin.p.rapidapi.com',
    //       'x-rapidapi-key': '81444d2f04mshb06f4571de3bd1dp1716dajsn456674549592'
    //     }
    // }

    // const getAssets = () => {
    //     // axios.request(options).then((response) => {
    //     //     console.log(response.data)
    //     //     setData(response.data.content)
    //     // }).catch(function (error) {
    //     //     console.error(error)
    //     // })
    //     // getAssets()
    //     // console.log(data)
    // }

    useEffect(() => {
        // getAssets(setData)
        setData(assets.content)
        // console.log(data[1800])
        console.log(assets)
    }, [])

    // useEffect(() => {
    //     // console.log(search)
    //     // setData(check())   
    // })

    const viewDetails = (item) => {
        getAssetDetails(setDetails, auth, item)
        navigation.navigate("Details",{
            item: item,
            details: details
        })
    }

    const check = (search) => {
        const searchReg = new RegExp(`${search.toLowerCase()}\\w+`,'g')
        // console.log(searchReg)
        // return searchReg.test(nm)
        if (search.length === 0)
            return assets.content
        else
            return assets.content.filter(
                asset => {
                    // return asset.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
                    if (searchReg.test(asset.name.toLowerCase()))
                        return asset    
                }
            )
    }

    return (
        <ScrollView>
            {/* {data.map((item) => 
                <Text key={item.id}>{item.name}</Text>
            )}  */}
            <TextInput
                placeholder = 'Search'
                value = {search}
                onChangeText = {(e) => {
                    setSearch(e)
                    setData(check(e))
                }}
                style = {styles.searchBar}
            />
            <FlatList 
                data={data}
                renderItem={
                    ({item}) => 
                        <TouchableOpacity
                            style={styles.box}
                            onPress={() => viewDetails(item)}
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
    },
    searchBar: {
        padding: 10,

    }
})