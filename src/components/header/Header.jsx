import React from "react";
import {Link} from 'react-router-dom';

import  Crown2  from '../../assets/crown2.svg';

import css from './Header.module.scss';

const Header = ()=>(
    <div className={css.header}>

        <Link className={css.logo_container} to="/">
            <img 
            className={css.logo}
            src={Crown2} 
            alt="Logo"
             />
        </Link>

        <div className={css.options}>
            <Link className={css.option} to="/shop">SHOP</Link>
            <Link className={css.option} to="/contact">CONTACT</Link>
        </div>

    </div>
)

export default Header;