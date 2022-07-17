import './CartButton.scss'
import { icons } from '../../constants'

function CartButton() {
    return (
        <button>

            <img 
                src={icons.cart}
                alt="cart icon"
            />

            Add to cart 

        </button>
    )
}

export default CartButton