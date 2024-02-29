const setUsers = async () => {
    const results = await fetch("https://dummyjson.com/users")
    const data = await results.json();
    const usuarios = data.users

    return usuarios;



}

export default setUsers
