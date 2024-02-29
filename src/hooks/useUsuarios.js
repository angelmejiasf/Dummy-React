import setUsers from '../services/setUsuarios';

import { useState, useEffect } from 'react';

function useUsuarios() {
    const [usuarios, setUsuarios] = useState([]);

    const datos = async () => {
        const users = await setUsers()
        setUsuarios(users);
        
    }
    

    useEffect(() => {
        datos()
    },[])

    return usuarios;
}

export default useUsuarios
