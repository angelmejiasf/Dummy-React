import React from 'react'

import useUsuarioID from '../hooks/useUsuarioID'

function UsuariosINFO() {
    const usuarioINFO = useUsuarioID()
    
    return (
        <div>
            <h2>Detalles del usuario</h2>
            {/* Si no encuentra resultados mostrar aviso */}
            {usuarioINFO === null || usuarioINFO === undefined ?
                <p>No hay datos para este usuario</p> :
                // Mostrar los resultados si hay
                <div>
                    <h2>Titulo: {usuarioINFO.title}</h2>
                    <p>{usuarioINFO.body}</p>
                    <li>
                        <ul>{usuarioINFO.tags[0]}</ul>
                        <ul>{usuarioINFO.tags[1]}</ul>
                        <ul>{usuarioINFO.tags[2]}</ul>
                    </li>

                </div>}
        </div>
    )
}

export default UsuariosINFO
