
import React from 'react'
import Products_data from '../data/Products_data';
import { Link } from 'react-router-dom';

const Products = () => {

    return (
        <div className='flex flex-row flex-wrap gap-6 mt-6 justify-items-center justify-center'>
            {
                Products_data.map((item) => {
                    const { id,image,brand,title,Price } = item;

                    return (
                        <Link to="/product-details">
                     <div class="card text-center" key={id}>
                        <img className="card-img-top" src={image} />
                        <div class="card-body">
                            <h5 class="card-title text-2xl/3 blacker leading-10">{title}</h5>
                            <p class="card-text">{brand}</p>
                            <h5 class="card-title">{Price}</h5>
   
                        </div>
                    </div>
                    </Link>
                 
                    
                    );
            })
            }   
        </div>
    )
}
export default Products;