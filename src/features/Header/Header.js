import './Header.scss'

import { icons, images } from '../../constants'

function Header() {
    return (
        <header className="header">

            <img 
                className="menuIcon"
                src={icons.menu}
                alt='menu icon'
            />

            <div className="logo">
                
                <img 
                    src={icons.logo}
                    alt='logo'
                />

            </div>

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