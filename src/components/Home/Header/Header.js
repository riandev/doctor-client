import React from 'react';
import Businessinfo from '../Businessinfo/Businessinfo';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navigation from '../Navigation/Navigation';
import './header.css'

const Header = () => {
    return (
        <div className="side-image">
            <Navigation></Navigation>
            <HeaderMain></HeaderMain>
            <Businessinfo></Businessinfo>
        </div>
    );
};

export default Header;