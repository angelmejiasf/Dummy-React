const setProducts = async () => {
    const results = await fetch("https://dummyjson.com/products")
    const data = await results.json();
    const productos = data.products

    return productos;

}

export default setProducts