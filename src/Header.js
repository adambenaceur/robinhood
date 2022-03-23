import React from 'react'
import Logo from './robinhood.svg'
import './Header.css'

function Header() {
  return (
    <div className='header__wrapper'>
        {/* logo */}
        <div className='header__logo'></div>
            <img src={Logo} width={25} alt='robinhood'/>
        {/* search */}
        <div className='header__search'>
            <div className='header__searchContainer'> <input className='header__searchInput'placeholder='Search' type='text'/></div>
        </div>
        {/* menu items */}
        <div className='header__menuItems'>
            <a >Free Stocks</a>
            <a  >Portfolio</a>
            <a >Cash</a>
            <a >Messages</a>
            <a >Account</a>

        </div>

    </div>
  )
}

export default Header