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

            <img
                className="qtyInput__btn btn__minus"
                src={icons.minus}
                alt="minus btn"
                onClick={() => qty>0 && setQty(prev=>prev-1)}
            />

            <input
                value={qty}
                type="number"
                onChange={changeHandler}
            />

            <img 
                className="qtyInput__btn btn__plus"
                src={icons.plus}
                alt="plus btn"
                onClick={() => setQty(prev=>prev+1)}
            />


        </div>
    )
}

export default QtyInput;