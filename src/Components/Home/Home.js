import React from 'react'
import './Home.css'

import Product from '../Products/Product.js'

function Home() {
  return (
    <div>
        <div className="home">
            <div className="home__Container">
                <img src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce.jpg" alt="" className="home__image" />
                <div className="home__row">
                    <Product/>
                    <Product/>
                </div>
                <div className="home__row">
                    <Product/>
                    <Product/>
                    <Product/>
                </div>
                <div className="home__row">
                    <Product/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home