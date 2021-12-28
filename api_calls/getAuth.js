import axios from "axios";

const getAuth = (dispatch, setAuth) => {

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

export default getAuth