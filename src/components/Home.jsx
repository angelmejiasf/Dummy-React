import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='container'>
    <main className='main'>
      {/* DIV PARA USUARIOS */}
      <div>
        <Link to="/usuarios"><img src='../src/assets/images/usuarios.png'></img></Link>
        <p>Usuarios</p>
      </div>

      {/* DIV PARA PRODUCTOS */}
      <div>
        <Link to ="/productos"><img src='../src/assets/images/productos.jpg'></img></Link>
        <p>Productos</p>

      </div>
    </main>

    </div>

  )
}

export default Home
