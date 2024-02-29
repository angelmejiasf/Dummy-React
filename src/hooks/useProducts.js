import { useState,useEffect } from 'react';

import setProducts from '../services/setProductos';
function useProducts() {
    const [productos,setProductos]=useState([]);

    const datos=async()=>{
       const products=await setProducts()
       setProductos(products)
    }

    useEffect(()=>{
        datos()
    },[])


    return productos;
}

export default useProducts
