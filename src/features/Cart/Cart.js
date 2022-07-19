import './Cart.scss'
import { iamges, images } from '../../constants'
import CartItem from './CartItem'
import { Button } from '../../components'
import { CartContext } from '../../Context'

import { useContext } from 'react'

function Cart() {

    const cart = Object.values(useContext(CartContext).state)

    return (
        <article className="cart">

            <header className="cart__header">

                <h1 className="txt">
                    Cart
                </h1>

            </header>

            <section className="cart__content">

                {
                    cart.length == 0

                    ? <div className="cart__empty">

                        <span>
                            Your cart is empty.
                        </span>
                      
                      </div>

                    : <div>

                        { cart.map(item => <CartItem data={item} />) }

                        <Button>
                            Checkout
                        </Button>

                      </div>

                }

            </section>

        </article>
    )
}

export default Cart