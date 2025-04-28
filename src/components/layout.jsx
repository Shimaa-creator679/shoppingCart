import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router'
import Carttab from './Carttab'

const Layout = ({count,setcount}) => {
  return (
    <div className=' bg-gray-100   '>


     


     
      <main className='p-5 sm:mx-20 relative  '>
     

        
   

        
     <Header count={count}/>

<Outlet/>
<Carttab count={count} setcount={setcount}/>
</main>


    </div>
  )
}

export default Layout
