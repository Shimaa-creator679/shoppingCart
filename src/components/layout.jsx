import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router'
import Carttab from './Carttab'

const Layout = ({count,setcount}) => {
  return (
    <div className='bg-zinc-200 flex justify-center bg-gray-100 '>
      <main className='   p-5 '>
     <Header count={count}/>

<Outlet/>
</main>
<Carttab count={count} setcount={setcount}/>
    </div>
  )
}

export default Layout
