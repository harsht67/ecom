import './QtyInput.scss'
import { icons } from '../../constants'

function QtyInput({qty, ...props}) {

    const changeHandler = (e) => {
        const q = parseInt(e.target.value)

        props.changeQty(q)
    }

    return (
        <div className="qtyInput">

            <button
                className="qtyInput__btn btn__minus"
                onClick={() => qty>0 && props.changeQty(prev=>prev-1)}
            >
                <img
                    src={icons.minus}
                    alt="minus btn"
                />
            </button>

            <input
                value={qty}
                type="number"
                onChange={changeHandler}
            />

            <button
                className="qtyInput__btn btn__plus"
                onClick={() => props.changeQty(prev=>prev+1)}
            >
                <img 
                    src={icons.plus}
                    alt="plus btn"
                />
            </button>

        </div>
    )
}

export default QtyInput;