import React, { useContext } from 'react'
import icon from "../assets/iconCart.png"
import { Link } from 'react-router'
import Cartcontext from "../Contextcart"

const Productcard = ({item,count,setcount}) => {

   const {cart,setcart}=useContext(Cartcontext)

   const handleclick = (item) => {
   const founditem= cart.find(it=>it.id===item.id)
   if(!founditem){
    setcart([...cart,item])
    setcount(count+1)
}
else{
  const newarray = cart.map((it) => 
    it.id === founditem.id ? { ...it, count: it.count + 1 } : it
  );
  
setcart(newarray)
setcount(count+1)

 };
   
  
   }

 

  
  
  return (
    <div className='bg-white p-1  rounded-xl  ' data-aos="flip-left">
        <Link to={item.slug} ><img src={item.img} className='mb-5 w-[50px] mx-auto sm:w-[100px]'></img></Link>
        <h1 className='text-center font-semibold mb-3'>{item.name}</h1>
        <div className='flex items-center justify-between'>
            <p className='text-[10px] md:text-xl '>${item.price}</p>
            <button className='flex items-center flex-col sm:flex-row bg-gray-200 gap-2 p-1 text-[10px] md:text-l rounded-xl' onClick={()=>{handleclick(item)}}>
                  <img src={icon} className='w-4 sm:w-5 '></img> 
               <p className='text-[10px]  '>add to cart</p> 
            
            </button>
        </div>

    </div>
  )
}

export default Productcard