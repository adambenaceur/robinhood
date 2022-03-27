import React from 'react'
import './Newsfeed.css'
import LineGraph from './LineGraph'
import TimeLine from './TimeLine'
import { Avatar, Chip } from '@material-ui/core'

const popularTopics = [
  'Technology',
  'Top Movies',
  'Upcoming Earnings',
  'Crypto',
  'Cannabis',
  'Healthcare Supplies',
  'Index ETFs',
  'Technology',
  'China',
  'Pharma'
];

function Newsfeed() {
  return (
    <div className='newsfeed'>
        <div className='newsfeed__container'>
          <div className='newsfeed__chartSection'>
            <div className='newsfeed__portfolio'>
              <h1>$1,000,000</h1>
              <p>+44.34 (+0.06%) Today</p>
            </div>
            <div className='newsfeed__chart'>
              <LineGraph/>
              <TimeLine />
            </div>
            <div className='newsfeed__buying__section'>
              <h2>Buying Power</h2>
              <h2>4.11</h2>
            </div>
            <div className='newsfeed__market__section'>
              <div className='newsfeed__market__box'>
                <p> Markets closed</p>
              </div>
            </div>
            <div className='newsfeed__popular__lists__section'>
            <div className='newsfeed__popular__lists__intro'>
              <h1>Popular list</h1>
              <p> Show more</p>
            </div>
            <div className='newsfeed__popular__lists__badges'>
              {popularTopics.map((topic) => (
                <Chip
                  className='topic__badge'
                  variant='outlined'
                  label={topic}
                  avatar={<Avatar
                    src={''}
                  />}
                />
              ))}
             </div>
            </div>
          </div>

        </div>
    
    
    </div>
        
  )
}

export default Newsfeed