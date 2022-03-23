import React, {useState, useEffect} from 'react';
import './Stats.css'; 
import axios from 'axios';
import StatsRow from './StatsRow';
import './StatsRow.css'

const TOKEN = 'c8t8niiad3ib2st17mg0';
const BASE_URL = 'https://finnhub.io/api/v1/quote';

function Stats() {
  // const finnhub = require('finnhub');
  // const api_key = finnhub.ApiClient.instance.authentications['api_key'];
  // api_key.apiKey = "c8t8niiad3ib2st17mg0"
  // const finnhubClient = new finnhub.DefaultApi()
  const [stockData, setStockData] = useState([]) 

  const getStocksData = (stock) => {
    return axios
      .get(`${BASE_URL}?symbol=${stock}&token=${TOKEN}`)
      .catch((error) => {
        console.error('Error', error.message);
      });
  };

  useEffect(() => {
    let tempStocksData = []
    const stocksList = ['AAPL', 'MSFT', 'TSLA', 'FB', 'BABA', 'UBER', 'DIS', 'SBUX'];
    let promises = [];
    stocksList.map((stock) => {
      promises.push(
        getStocksData(stock)
        .then((response) => {

          tempStocksData.push({
            name: stock,
            ...response.data
          });
        })
      )
    });
    
    Promise.all(promises).then(() => {
      setStockData(tempStocksData);
      console.log(tempStocksData)
    })

  }, [])

  console.log(stockData)

  return (
    <div className='stats'>
      <div className='stats__container'>
        <div className='stats__header'>
          <p>Stocks</p>
        </div>
        <div className='stats__content'>
          <div className='stats__rows'>
          {/* for current stocks */}
          {/* {stockData.map((stock) => (
            <StatsRow
            key={stock.data.ticker}
            name={stock.data.ticker}
            openPrice={stock.info.o}
            volume={stock.data.share}
            price={stock.info.c}
            /> */}
            {/* ))} */}
          </div>
        </div>
        <div className='stats__header'>
          <p>lists</p>
        </div>
        <div className='stats__content'>
          <div className='stats__rows'>
          {/*  stocks we can buy*/}
          
          {stockData.map((stock) => (
            <StatsRow
              key={stock.name}
              name={stock.name}
              openPrice={stock.o}
              price={stock.c}
            />
            ))}
          </div>
          
        </div>
      </div>

    </div>
  )
}

export default Stats