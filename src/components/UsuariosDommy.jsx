import React, { useEffect, useState } from 'react'

import { Link, Outlet } from 'react-router-dom';
import useUsuarios from '../hooks/useUsuarios';


function UsuariosDommy() {
  const usuarios=useUsuarios();

  return (
    <div>
      <h1>Usuarios</h1>


      {usuarios===null||usuarios===undefined?
      <p>No hay datos de usuario</p>:
      usuarios.map(user=>{
        return(
            <div key={user.id}>
                <img src={user.image}></img>
                <Link to={`/usuarios/${user.id}`}><p>{user.firstName}  {user.lastName}</p></Link>
                <p>{user.maidenName}</p>
                




            </div>
        )
      })}
      <Outlet></Outlet>
    </div>
  )
}

export default UsuariosDommy
