import { createContext, useReducer } from 'react'

export const CartContext = createContext()

const initialState = {
    // 1: {
    //     id: 1,
    //     img: 'p1',
    //     name: 'fall limited edition sneakers',
    //     price: 125,
    //     qty: 3,
    // }
}

function reducer(state, action) {
  switch (action.type) {
    case 'addItem':
      return addItem(action.payload, state)
    case 'removeItem':
      return removeItem(action.payload, state)
    default:
      throw new Error()
  }
}

const addItem = (product, state) => {
    let id = product.id
    let newState = state 

    // for items already in cart
    if(state[id]) {
        newState[id].qty+=product.qty
    }
    // for new items added to cart
    else {
        newState[id] = product
    }

    return {...newState}

}

// remove item from the cart
const removeItem = (id, state) => {
    let newState = state 
    delete newState[id]

    return {...newState}
}

function CartContextProvider(props) {

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <CartContext.Provider value={{state, dispatch}}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider