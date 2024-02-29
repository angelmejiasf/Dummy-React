import setProductosID from "../services/setProductosID";
import { useState,useEffect } from 'react';
import { useParams } from "react-router-dom";

function useProductsID() {
    const [productoINFO,setProductoINFO]=useState([]);
    const {id}=useParams();

    const datos=async(id)=>{
        const productsID=await setProductosID(id);
        setProductoINFO(productsID);
    }

    useEffect(()=>{
        datos(id)
    },[])

    return productoINFO;
}

export default useProductsID
