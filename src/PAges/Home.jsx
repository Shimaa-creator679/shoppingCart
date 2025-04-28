import React from 'react'
import { furnitureData } from '../components/products'
import Productcard from '../components/Productcard'

const Home = ({count,setcount}) => {
  return (
    <div>
      <div className="container mx-auto">
 
      <h1 className='font-semibold mb-5 text-l'>list products </h1>
        
      <div className='grid gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4'>
      
        
        {furnitureData.map((item)=>{
          return <Productcard key={item.id} item={item} count={count} setcount={setcount}/>
        })}
        </div>
        </div>
        </div>
     
    
  )
}

export default Home