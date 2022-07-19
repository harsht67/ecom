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
        <div className="cartItem">

            <img
                className="cartItem__img"
                src={images[img]}
                alt="product image"
            />

            <div className="cartItem__desc">

                <p>
                    {name}
                </p>

                <p>
                    ${price.toFixed(2)} x {qty} <span className="imp">${(price*qty).toFixed(2)}</span>
                </p>
            
            </div>

            <img
                className="cartItem__deleteBtn"
                src={icons.del}
                alt="delete icon"
                onClick={removeItem}
            />

        </div>
    )
}

export default CartItem