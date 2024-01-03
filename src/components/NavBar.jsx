import CartWidget from '../components/CartWidget'
import React from 'react'


const NavBar = () => {
  return (
    <div>
        <header>
            <h1>Tienda Electronica</h1>
            <nav>
                <ul>
                    <button>Celulares</button>
                    <button>Tablets</button>
                    <button>Notebooks</button>
                </ul>
            </nav>

                <div className='Cart'>
                   <CartWidget/>
               </div>

        </header>
    </div>
  )
}

export default NavBar