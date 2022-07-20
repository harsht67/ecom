import './CartItem.scss'
import { icons, images } from '../../constants'
import { CartContext } from '../../Context'

import { useContext } from 'react'

function CartItem(props) {

    const dispatch = useContext(CartContext).dispatch

    const removeItem = () => {
        dispatch({
            type: 'removeItem',
            payload: id
        })
    }

    const { id, img, name, price, qty } = props.data

    return (
        <article className="cartItem">

            <img
                className="cartItem__img"
                src={images[img]}
                alt="product image"
            />

            <section className="cartItem__desc">

                <p>
                    {name}
                </p>

                <p>
                    ${price.toFixed(2)} x {qty} <span className="imp">${(price*qty).toFixed(2)}</span>
                </p>
            
            </section>

            <img
                className="cartItem__deleteBtn"
                src={icons.del}
                alt="delete icon"
                onClick={removeItem}
            />

        </article>
    )
}

export default CartItem