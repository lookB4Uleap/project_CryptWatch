import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://yh-finance.p.rapidapi.com/auto-complete',
  params: {q: 'crytocurrency', region: 'US'},
  headers: {
    'x-rapidapi-host': 'yh-finance.p.rapidapi.com',
    'x-rapidapi-key': '81444d2f04mshb06f4571de3bd1dp1716dajsn456674549592'
  }
}

const getNews = (setNews) => {
    axios.request(options).then(function (response) {
        console.log(response.data);
        setNews(response.data.news)
        // return response.data.news
    }).catch(function (error) {
        console.error(error);
    })
}

export default getNews