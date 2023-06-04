import React, { useState } from 'react';
import Increment from '../components/Increment';
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom';

const ProductDetails = () => {
    const [count, setCount] = useState(1);
  const [state, setState] = useState({
    arr: [
      { id: 1, name: "S" },
      { id: 2, name: "M" },
      { id: 3, name: "L" },
      { id: 4, name: "XL" },
      { id: 5, name: "XXL" }
    ],
    selected: 1
  });

  const changeColor = id => {
    setState(prevState => ({ ...prevState, selected: id }));
  };

  const { selected, arr } = state;

  return (
    <div>
      <img src="/images/product_page.png" className='z-0 top-0 w-2/4 relative mx-auto' alt="" />
      <div className="flex justify-between">
        <div className="absolute top-5 left-10 flex-initial w-100 ...">
          <Link to="/"><img src="/images/arrow.svg" alt="" width={50} /></Link>
        </div>
        <div className="absolute top-5 right-10 flex-initial w-100 ...">
          <img className="rounded-full" src="/images/cart_pro.svg" alt="" width={50} />
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center">
          <div>
            <span className='card-title-2 text-2xl blacker'>Roller Rabbit</span><br />
            <span className='text-grey_1 text-1xl black'>Vado Odelle Dress</span>
          </div>
          <Increment count={count} setCount={setCount} />
        </div>
        <div className='flex justify-between mt-5 px-12 star'>
          <span><img src="/images/star.png" alt="" /> 320 reviews</span>
          <span className='text-grey_1 text-1xl black'>Available in stock</span>
        </div>
      </div>
      <span className='card-title-2 text-2xl blacker'>Sizes</span><br />

      <div className='flex size gap-3'>
        {arr.map(({ name, id }) => (
          <p
            key={id}
            style={{ backgroundColor: selected === id ? "black" : "",
            color: selected === id ? "white" : "black" }}
            onClick={() => changeColor(id)}
          >
            {name}
          </p>
        ))}
      </div>
      <br />
      <span className='card-title-2 text-2xl blacker'>Description</span><br /><br />
      <p className='text-grey_1 text-1xl black'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto quam rerum earum pariatur neque! Facere excepturi repellat expedita sit, sint in, recusandae magni neque, dicta asperiores exercitationem! Est, officiis ullam harum recusandae animi odit dicta aspernatur dolorum iste excepturi cum eius pariatur, facilis rerum modi debitis ea similique totam tempora. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum eaque architecto dolores placeat reiciendis molestias? Quaerat, quia totam officiis, natus expedita illo consectetur accusantium, nemo commodi ea magni obcaecati nisi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga repellat ex ut pariatur minus non, quia, libero quas incidunt at laboriosam, rerum iusto hic aliquid omnis eaque aliquam modi voluptatibus.</p>
            <br /><br /><br />
        
        <div className="flex justify-between items-center">
        <div>
        <span className='text-grey_1 text-l black'>Total price</span><br />
        <span className='card-title text-2xl blacker'>${count*198}</span><br />
          </div>
          
          <div className='flex items-center relative'>
            <img className='as1 absolute left-4' src="/images/buy.svg" alt="" />
          <button className='pr_but text-xl'><Link to="/payment">Buy now</Link></button> 
          </div>
        </div>
    </div>
  );
};

export default ProductDetails;
