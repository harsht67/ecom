import './Header.scss'
import { icons, images } from '../../constants'
import { NavList } from '../../components'

import { useState } from 'react'

function Header() {

    const [menu, SetMenu] = useState(100)

    const toggleMenu = () => {
        SetMenu(prev => prev==100?0:100)
    }

    return (
        <header className="header">


            <section className="menu">

                <img 
                    className="menu__icon"
                    src={icons.menu}
                    alt='menu icon'
                    onClick={toggleMenu}
                />
            
                <nav 
                    className="menu__content"
                    style={{transform: `translateX(${-menu}%)`}}
                >

                    <img
                        src={icons.close}
                        alt="close icon"
                        onClick={toggleMenu}
                    />

                    <NavList/>
                
                </nav>

            </section>

            <div className="logo">
                
                <img 
                    src={icons.logo}
                    alt='logo'
                />

            </div>

            <nav className="nav">
                <NavList/>
            </nav>

            <img
                className="cartIcon"
                src={icons.cart}
                alt='cart icon'
            />

            <img 
                className="avatar"
                src={images.avatar}
                alt='user avatar'
            />

        </header>
    )
}

export default Header