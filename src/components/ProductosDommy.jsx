import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import useProducts from '../hooks/useProducts';

function ProductosDommy() {
    const productos = useProducts()


    return (


        <div className='container'>
            <h1>Productos</h1>

            {productos === null || productos === undefined ?
                <p>No existen productos</p> :
                productos.map(producto => {
                    return (
                        <div key={producto.id} className='card'>

                            <h3>{producto.title}</h3>
                            <img src={producto.thumbnail}></img>
                            <Link to={`/productos/${producto.id}`}><button>Ver Producto</button></Link>



                        </div>





                    )

                })}
            <Outlet></Outlet>
        </div>
    )
}

export default ProductosDommy
