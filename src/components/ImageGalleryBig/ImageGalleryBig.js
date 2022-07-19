import './ImageGalleryBig.scss'
import { images } from '../../constants'
import { useState } from 'react'

const imgs = ['p1_t', 'p2_t', 'p3_t', 'p4_t']

function ImageGalleryBig() {

    const [focusImg, setFocusImg] = useState('p1')

    const changeFocusImg = (e) => {
        let val = e.target.getAttribute('data-val')
        let newImg = val.split('_')[0]

        setFocusImg(newImg)
    }

    return (
        <article className="imageGalleryBig">

            <img
                className="focusImg"
                src={images[focusImg]}
                alt="product image"
            />

            <section className="thumbnail">

                {imgs.map(img => (
                    <img
                        key={img}
                        data-val={img}
                        className={img==(focusImg+'_t') && 'focus--img'}
                        onClick={changeFocusImg}
                        src={images[img]}
                        alt="product thumbnail"
                    />
                ))}

            </section>

        </article>
    )
}

export default ImageGalleryBig