import React from 'react';
import './Header.css';
import Logo from '../Logo/Logo';
import Contact from '../Contact/Contact';
import Navigation from '../Navigation/Navigation';
import Searchbar from '../Searchbar/Searchbar';
import Cart from '../Cart/Cart';

class Header extends React.Component{
    render() {
        return <div className="header-container">
            <div className="header-top-container">
                <Logo/>
                <Contact/>
                <Navigation/>
            </div>
            <div className="header-bottom-container">
                <Searchbar/>
                <Cart/>
            </div>
        </div>;
    }
}

export default Header;