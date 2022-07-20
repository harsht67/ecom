import './ProductPage.scss'
import { Button, ImageGallery, ImageGalleryBig, QtyInput, Lightbox } from '../../components'
import { icons } from '../../constants'
import { CartContext } from '../../Context'

import { useState, useContext } from 'react'

function ProductPage() {

    const cart = useContext(CartContext)

    const [qty, setQty] = useState(0)

    const [lightbox, setLightbox] = useState(false)

    // updates quantity 
    const changeQty = (qty) => {
        setQty(qty)
    }

    // open/close - lightbox
    const toggleLightbox = () => {
        setLightbox(prev => !prev)
    }

    const addToCart = () => {
        qty>0 &&
            cart.dispatch({
                type: 'addItem',
                payload: {
                    id: 1,
                    img: 'p1',
                    name: 'fall limited edition sneakers',
                    price: 125,
                    qty,
                }
            })
    }

    return (
        <article className="productPage">

            <div className="productPage__col1">

                <ImageGallery/>

                <ImageGalleryBig 
                    toggleLightbox={toggleLightbox} 
                    lightbox={lightbox}
                />               

                { lightbox && <Lightbox toggleLightbox={toggleLightbox} /> } 

            </div>

            <div className="productPage__col2">

                <section className="productPage__desc">

                    <h1 className="txt">
                        sneaker company
                    </h1>

                    <h2 className="f1">
                        fall limited edition sneakers
                    </h2>

                    <p className="txt">
                        These low-profile sneakers are your perfect casual wear companion.
                        Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.
                    </p>

                </section>

                <section className="productPage__price">

                    <div>

                        <span className="price f1">
                            $125.00
                        </span>

                        <span className="discount">
                            50%
                        </span>

                    </div>

                    <div className="mrp f5">
                        $250.00
                    </div>

                </section>

                <section className="productPage__btns">

                    <QtyInput
                        qty={qty}
                        changeQty={changeQty}
                    />

                    <Button onClick={addToCart} >

                        <img
                            src={icons.cart2}
                            alt="cart icon"
                        />

                        Add to cart
                        
                    </Button>

                </section>
            
            </div>

        </article>
    )
}

export default ProductPage