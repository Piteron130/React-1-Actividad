import React from 'react'


const CartWidget = () => {

    const items = 5

  return (
    <div>
        <h4>🛒</h4>
        <p className='CartP'>Items: {items}</p>
    </div>
  )
}

export default CartWidget