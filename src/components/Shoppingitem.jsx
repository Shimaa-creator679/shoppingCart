import React, { useContext } from 'react'
import Cartcontext from '../Contextcart'

const Shoppingitem = ({item,count,setcount}) => {
    const{cart,setcart}=useContext(Cartcontext)

const handledec=(item)=>{
    
    const newarray=cart.map(it=>
        it.id===item.id? {...it,count:it.count===0?0:it.count-1}:it
);
setcart(newarray)
setcount(count===0?0:count-1);
}
const handleinc=(item)=>{
   
    const newarray=cart.map(it=>
        it.id===item.id? {...it,count:it.count+1}:it
);
setcart(newarray)
setcount(count+1);
}

        
    





  return (
    <div className='flex flex-col justify-between sm:flex-row items-center bg-gray-300 rounded-2xl h-[80px] px-3 mt-1'>
        <div className="left flex  items-center">
<img src={item.img} className='w-[30px] mr-2'></img>
<p className='text-sm'>{item.name}</p>
        </div>
        <div className="right flex items-center  gap-2">
   <p className='text-sm'>{item.price}</p>
   <button onClick={()=>{handledec(item)}} className='bg-gray-600 rounded-full p-1 w-5 h-5 text-white flex items-center justify-center'>-</button>
   <p>{item.count}</p>
   <button onClick={()=>{handleinc(item)}} className='bg-gray-600 rounded-full p-1 w-5 h-5 text-white flex items-center justify-center'>+</button>
        </div>
    </div>
  )
}

export default Shoppingitem