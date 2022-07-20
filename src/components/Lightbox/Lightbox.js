import './Lightbox.scss'
import ImageGalleryBig from '../ImageGalleryBig/ImageGalleryBig';
import { icons } from '../../constants'

function Lightbox(props) {

    return (
        <article className="lightbox">

            <div className="lightbox__container">

                <header className="lightbox__header">

                    <img
                        src={icons.close}
                        alt="close icon"
                        onClick={()=>props.toggleLightbox()}
                    />

                </header>

                <ImageGalleryBig/>

            </div>

        </article>
    )
}

export default Lightbox