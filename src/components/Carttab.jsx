import React, { useContext } from 'react'
import Cartcontext from '../Contextcart'
import Shoppingitem from './Shoppingitem'

const Carttab = ({count,setcount}) => {

  const{active,cart}=useContext(Cartcontext)


  return (
    <>
      {active && (
        <div className="bg-gray-900 px-1 absolute bottom-0" data-aos="fade-up">
          <h1 className="my-5 text-white font-semibold uppercase">shopping cart</h1>
          <div>
            {cart.map((item) => (
              <Shoppingitem key={item.id} item={item} count={count} setcount={setcount} />
            ))}
          </div>
        </div>
      )}
    </>
  );
  

}

export default Carttab