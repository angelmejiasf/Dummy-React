import React from 'react'
import { Link} from 'react-router-dom';
import useProductsID from '../hooks/useProductsID';

function ProductosINFO() {
    const productoINFO=useProductsID()


  return (
    <div>
      <h1>Informacion del producto</h1>

      {productoINFO===null||productoINFO===undefined?
      <p>No hay informacion para este producto</p>:
      <div>
        <h3>{productoINFO.title}</h3>
        <p>{productoINFO.description}</p>
        <img src={productoINFO.thumbnail}></img>
        <p>Precio: {productoINFO.price} €</p>
        <p>Stock: {productoINFO.stock} unidades</p>
        <p>Descuento: {productoINFO.discountPercentage}%</p>
        
        
        </div>
        
        }

        <Link to="/productos"><button>Volver</button></Link>
    </div>
  )
}

export default ProductosINFO
