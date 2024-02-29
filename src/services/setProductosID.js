const setProductosID = async (id) => {
    const results = await fetch(`https://dummyjson.com/products/${id}`)
    const data = await results.json();
    const productsinfo = data

    return productsinfo

}

export default setProductosID
