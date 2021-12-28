import axios from "axios"


const getAssets = (dispatch, setAssets) => {
    const options = {
        method: 'GET',
        url: 'https://bravenewcoin.p.rapidapi.com/asset',
        params: {status: 'ACTIVE'},
        headers: {
          'x-rapidapi-host': 'bravenewcoin.p.rapidapi.com',
          'x-rapidapi-key': '81444d2f04mshb06f4571de3bd1dp1716dajsn456674549592'
        }
    }

    axios.request(options).then((response) => {
        console.log(response.data)
        // setData(response.data.content)
        dispatch(setAssets(response.data))
    }).catch(function (error) {
        console.error(error)
    })
}

export default getAssets