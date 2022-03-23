import React from 'react'
import './StatsRow.css'
import stockSVG from './stock.svg'

function StatsRow(props) {
    
    return (
        <div className='row'>
            <div className='row__intro'>
                <h1> {props.name} </h1>
                <p> {props.shares && (props.shares + 'shares')} </p>
            </div>
            <div className='row__chart'>
                <img src={stockSVG} height={16}/>
                </div>
            <div className='row__numbers'>
                <p className='row__price'>{props.price}</p>
                <p className='row__percentage'> +200%</p>
            </div>
        </div>
  )
}

export default StatsRow