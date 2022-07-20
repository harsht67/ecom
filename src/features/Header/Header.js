import './Header.scss'
import { icons, images } from '../../constants'
import { NavList } from '../../components'
import Cart from '../Cart/Cart'
import { CartContext } from '../../Context'

import { useState, useContext } from 'react'

function Header() {

    const cartState = useContext(CartContext).state
    // number of items in cart
    const cartQty = Object.values(cartState).map(item => item.qty).reduce((prev, curr) => prev+curr, 0)

    const [menu, SetMenu] = useState(false)

    const [cart, setCart] = useState(false)

    const toggleMenu = () => {
        setCart(false)
        SetMenu(prev => !prev)
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
            
                <nav className={`menu__content ${menu && 'menu__open'} `}>

                    <div>

                        <img
                            src={icons.close}
                            alt="close icon"
                            onClick={toggleMenu}
                        />

                        <NavList/>
                    
                    </div>
                
                </nav>

            </section>

            <section className="logo">
                
                <img 
                    src={icons.logo}
                    alt='logo'
                />

            </section>

            <nav className="nav txt">

                <NavList/>
            
            </nav>

            <section className="cartIcon">

                <img
                    src={icons.cart}
                    alt='cart icon'
                    onClick={toggleCart}
                />

                { cartQty>0 &&
                    <span className="cartQty">
                        {cartQty}
                    </span>
                }
            
            </section>

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