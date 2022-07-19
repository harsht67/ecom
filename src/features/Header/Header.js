import './Header.scss'
import { icons, images } from '../../constants'
import { NavList } from '../../components'
import Cart from '../Cart/Cart'

import { useState } from 'react'

function Header() {

    const [menu, SetMenu] = useState(100)

    const [cart, setCart] = useState(false)

    const toggleMenu = () => {
        setCart(false)
        SetMenu(prev => prev==100?0:100)
    }

    const toggleCart = () => {
        setCart(prev => !prev)
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
            
                <div 
                    className="menu__content"
                    style={{transform: `translateX(${-menu}%)`}}
                >

                    <nav>

                        <img
                            src={icons.close}
                            alt="close icon"
                            onClick={toggleMenu}
                        />

                        <NavList/>
                    
                    </nav>
                
                </div>

            </section>

            <div className="logo">
                
                <img 
                    src={icons.logo}
                    alt='logo'
                />

            </div>

            <nav className="nav txt">

                <NavList/>
            
            </nav>

            <img
                className="cartIcon"
                src={icons.cart}
                alt='cart icon'
                onClick={toggleCart}
            />

            { cart && <Cart/> }

            <img 
                className="avatar"
                src={images.avatar}
                alt='user avatar'
            />

        </header>
    )
}

export default Header