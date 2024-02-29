import setUsuariosID from "../services/setUsuariosID"

import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"

function useUsuarioID() {
    const [usuarioINFO,setUsuarioINFO]=useState()
    const {id}=useParams()


    const datos=async(id)=>{
       const usuarioID=await setUsuariosID(id);
       setUsuarioINFO(usuarioID);
    }

    useEffect(()=>{
        datos(id)
    })

    return usuarioINFO;
    
}

export default useUsuarioID
