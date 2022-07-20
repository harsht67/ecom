import './ImageGallery.scss'
import { images, icons } from '../../constants'

import { useState } from 'react'

const imgs = ['p1', 'p2', 'p3', 'p4']

function ImageGallery() {

    const [x, setX] = useState(0)

    const moveLeft = () => {
        if(x!=0) {
            setX(prev => prev-100)
        }
    }

    const moveRight = () => {
        if(x<(imgs.length-1)*100) {
            setX(prev => prev+100)
        }
    }

    return (
        <article className="imageGallery">

            <button 
                className={`imageGallery__btn left--btn ${x==0 && 'disabled--btn'}`}
                onClick={moveLeft}
            >

                <img 
                    src={icons.previous}
                    alt="left arrow"
                />

            </button>

            <section
                className="imageGallery__container"
                style={{transform: `translateX(${-x}%)`}}
            >

                {imgs.map(img => (
                    <img
                        key={img}
                        src={images[img]}
                        alt="product image"
                    />
                ))}
            
            </section>

            <button 
                className={`imageGallery__btn right--btn ${x==(imgs.length-1)*100 && 'disabled--btn'} `}
                onClick={moveRight}
            >

                <img
                    src={icons.next}
                    alt="right arrow"
                />

            </button>

        </article>
    )
}

export default ImageGallery