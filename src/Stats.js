import React, {useState, useEffect} from 'react';
import './Stats.css'; 
import axios from 'axios';
import StatsRow from './StatsRow';
import './StatsRow.css'
import { db } from './Firebase'

const TOKEN = 'c8t8niiad3ib2st17mg0';
const BASE_URL = 'https://finnhub.io/api/v1/quote';



const testData = []; 

function Stats() {
  const [ stocksData, setStocksData] = useState([]) 
  const [ myStocks, setMyStocks] = useState([])

  const getMyStocks = () => {
    db
    .collection('myStocks')
    .onSnapshot(snapshot => {
      let promises = [];
      let tempData = []
      snapshot.docs.map((doc) => {
          promises.push(getStocksData(doc.data().ticker)
        .then(res => {
          tempData.push({
            id: doc.id,
            data: doc.data(),
            info: res.data
          })
        }) 
      )})
      Promise.all(promises).then(() => {
        console.log(tempData);
        setMyStocks(tempData);
      })
    })
  }

  const getStocksData = (stock) => {
    return axios
      .get(`${BASE_URL}?symbol=${stock}&token=${TOKEN}`)
      .catch((error) => {
        console.error('Error', error.message);
      });
  };

  useEffect(() => {
    const stocksList = ['AAPL', 'MSFT', 'TSLA', 'FB', 'BABA', 'UBER', 'DIS', 'SBUX'];
    
    getMyStocks();
    let promises = [];
    stocksList.map((stock) => {
      promises.push(
        getStocksData(stock)
        .then((res) => {
          testData.push({
            name: stock,
            ...res.data
          });
        })
      )
    });
    
    Promise.all(promises).then(() => {
      setStocksData(testData);
      console.log(testData)
    })

  }, [])


  return (
    <div className='stats'>
      <div className='stats__container'>
        <div className='stats__header '>
          <p>Stocks</p>
        </div>
        <div className='stats__content'>
          <div className='stats__rows'>
          {/* for current stocks */}
          {myStocks.map((stock) => (
              <StatsRow
                key={stock.data.ticker}
                name={stock.data.ticker}
                openPrice={stock.info.o}
                shares={stock.data.shares}
                price={stock.info.c}
              />
            ))}
          </div>
        </div>
        <div className='stats__header stats__lists'>
          <p>lists</p>
        </div>
        <div className='stats__content'>
          <div className='stats__rows'>
          {/*  stocks we can buy*/}
          
          {stocksData.map((stock) => (
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

export default Stats;