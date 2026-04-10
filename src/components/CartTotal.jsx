import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'

function CartTotal() {
    const {getCartTotal}=useContext(ProductContext)
    let delivery = 20
  return (
    <div>CartTotal
    {getCartTotal()} <br />
    delivery {delivery}  <br />
    total : {getCartTotal() + delivery}
    </div>
  )
}

export default CartTotal