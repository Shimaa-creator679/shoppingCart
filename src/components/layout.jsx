import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router'
import Carttab from './Carttab'

const Layout = ({count,setcount}) => {
  return (
    <div className='bg-zinc-200  bg-gray-100 '>


     
      <main className='   p-5 '>
        <div className="container">

        
     <Header count={count}/>

<Outlet/>
</div>
</main>
<Carttab count={count} setcount={setcount}/>

    </div>
  )
}

export default Layout
