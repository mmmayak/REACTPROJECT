import React from 'react';
import burgerLogo from '../../assets/images/burger-logo-2-hi.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={burgerLogo} alt="BlackBurger"/>
    </div>
  
);

export default logo;