import './Cart.scss'
import { iamges, images } from '../../constants'
import CartItem from './CartItem'
import { Button } from '../../components'
import { CartContext } from '../../Context'

import { useContext } from 'react'

function Cart(props) {

    const cart = Object.values(useContext(CartContext).state)

    return (
        <article className="cart" {...props} >

            <header className="cart__header">

                <h1 className="txt">
                    Cart
                </h1>

            </header>

            <section className="cart__content">

                {
                    cart.length == 0

                    ? <div className="cart__empty">

                        <p>
                            Your cart is empty.
                        </p>
                      
                      </div>

                    : <>

                        { cart.map(item => <CartItem key={item.id} data={item} />) }

                        <Button>
                            Checkout
                        </Button>

                      </>

                }

            </section>

        </article>
    )
}

export default Cart