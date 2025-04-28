import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { furnitureData } from '../components/products';

const Details = () => {
  const {slug}=useParams();
  const[itemdetail,setitemdetail]=useState({})

  useEffect(()=>{
    const item = furnitureData.find(item => item.slug === slug);
setitemdetail(item)
  },[slug])


  if (!itemdetail) {
    return (
      <div className="container text-center py-10">
        <h1 className="text-2xl font-bold">Product not found!</h1>
      </div>
    );
  }


  return (
    <div>
     
        {itemdetail?(

          <div className='bg-gray-300 flex items-center  '>
          <div className="container "> 
          <h1 className='text-center mb-5  text-xl mt-20 uppercase'>product Details</h1>
        
       <div className="flex  flex-col sm:flex-row">
      <div>
        <img src={itemdetail.img} className='w-[50px] sm:w-[200px] mx-auto'></img>
      </div>
      <div className="text">
        <h1 className='font-bold text-3xl mb-5 text-center'>{itemdetail.name}</h1>
        <p className='font-semibold mb-5 text-center'>${itemdetail.price}</p>
        <p className='text-center'>{itemdetail.description}</p>
      </div>
      
       </div>
       </div>
       </div>
       ):(<div>loading...</div>)}
       
      

    </div>
  )
}

export default Details