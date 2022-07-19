import './QtyInput.scss'
import { icons } from '../../constants'
import { useState } from 'react';

function QtyInput() {

    const [qty, setQty] = useState(0)

    const changeHandler = (e) => {

        const q = parseInt(e.target.value)

        setQty(q)

    }

    return (
        <div className="qtyInput">

            <div
                className="qtyInput__btn btn__minus"
                onClick={() => qty>0 && setQty(prev=>prev-1)}
            >
                <img
                    src={icons.minus}
                    alt="minus btn"
                />
            </div>

            <input
                value={qty}
                type="number"
                onChange={changeHandler}
            />

            <div
                className="qtyInput__btn btn__plus"
                onClick={() => setQty(prev=>prev+1)}
            >
                <img 
                    src={icons.plus}
                    alt="plus btn"
                />
            </div>

        </div>
    )
}

export default QtyInput;