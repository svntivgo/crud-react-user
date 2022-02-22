import React, { useState } from 'react';
import UserTable from './components/UserTable';
import { v4 as uuidv4 } from 'uuid';
import AddUserForm from './components/AddUserForm';

function App() {
    const usersData = [
        { id: uuidv4(), name: 'Tania', username: 'floppydiskette' },
        { id: uuidv4(), name: 'Craig', username: 'siliconeidolon' },
        { id: uuidv4(), name: 'Ben', username: 'benisphere' },
    ]

    const [users, setUsers] = useState(usersData)

    /**
     * Crea un nuevo usuario
     * @param {*} user
     */
    const addUser = (user) => {
        user.id = uuidv4()
        setUsers([...users, user])
    }

    /**
     * Elimina un usuario
     * @param {*} id
     */
    const deleteUser = (id) => {
        setUsers(users.filter((user) => user.id !== id))
    }

    return (
        <div className="container">
            <h1>CRUD App with Hooks</h1>
            <div className="flex-row">
                <div className="flex-large">
                <h2>Add user</h2>
                <AddUserForm addUser={addUser}/>
                </div>
                <div className="flex-large">
                <h2>View users</h2>
                <UserTable users={users} deleteUser={deleteUser}/>
                </div>
            </div>
        </div>
    );
}

export default App;
