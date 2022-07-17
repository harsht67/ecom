import './ProductPage.scss'
import { CartButton, ImageGallery, QtyInput } from '../../components'

function ProductPage() {
    
    return (
        <div className="productPage">

            <ImageGallery/>

            <section className="productPage__desc">

                <h2 className="f5">
                    sneaker company
                </h2>

                <h1 className="f1">
                    fall limited edition sneakers
                </h1>

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

                <span className="mrp f5">
                    $250.00
                </span>

            </section>

            <section className="productPage__btns">

                <QtyInput/>

                <CartButton/>

            </section>
            



        </div>
    )
}

export default ProductPage