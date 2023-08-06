import React from 'react'
import style from "./nav.module.css"

const Nav = () => {
    return (
        <nav className={style.main}>
            <ul>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>CONTACT</li>
            </ul>
        </nav>
    )
}

export default Nav;
