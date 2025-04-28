

import React, { createContext, useState } from 'react';

// إنشاء السياق
const Cartcontext = createContext();

// مزود للسياق
 export const CartProvider = ({ children }) => {
    const [cart, setcart] = useState([]); 
    const[itemscount,setitemscount]=useState(0)

    const[active,setactive]=useState(false)
  
   
  
    return (
      <Cartcontext.Provider value={{ cart, setcart ,itemscount,setitemscount,active,setactive}}>
        {children}
      </Cartcontext.Provider>
    );
  };
  export default Cartcontext;
  