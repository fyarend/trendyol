import React from 'react';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { FaSearch } from 'react-icons/fa';
import { SvgIcon } from '@mui/material';
import { Link } from 'react-router-dom';
import './header.css'

function Header (){

    return (
        <div className="container">
          <div className="header">
            <img className='logo'  src={`${process.env.PUBLIC_URL}/logo.jpg`}></img>
            <div className="search-bar">
              <input className="search-input" placeholder="Aradığınız ürün, kategori veya markayı yazınız" />
              <FaSearch className="search-icon" />  
            </div>
            <div className='productcart'>
              <Link to="/cart" className='cartbutton'> <SvgIcon className='carticon' component={ShoppingBasketIcon} inheritViewBox />Sepet</Link> 
            </div>
          </div>
        </div>
      );
}

export default Header;