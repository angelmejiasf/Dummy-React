import React from 'react'

import { Link, Outlet } from 'react-router-dom'
function LayaoutRoutes() {
    return (
        <div className='container'>
            <nav>
            <Link to="/home">Home</Link>
            <Link to="/usuarios">Usuarios</Link>
            <Link to="/productos">Productos</Link>
            
            
            </nav>

            <main>




            </main>

            <Outlet></Outlet>
            
        </div>

    )
}

export default LayaoutRoutes
