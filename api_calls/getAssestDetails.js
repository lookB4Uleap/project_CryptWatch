import axios from "axios";

const getAssetDetails = (setDetails, auth, item) => {
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

export default getAssetDetails