const setUsuariosID = async (id) => {
    const results=await fetch(`https://dummyjson.com/posts/${id}`)
    const data=await results.json();
    const usuariosid=data
    
    return usuariosid;
}

export default setUsuariosID
