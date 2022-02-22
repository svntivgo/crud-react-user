import React, { useState } from 'react';
import UserTable from './components/UserTable';
import { v4 as uuidv4 } from 'uuid';
import AddUserForm from './components/AddUserForm';
import EditUserForm from './components/EditUserForm';

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

    /**
     * Booleano que indica si se está editando o no
     */
    const [editing, setEditing] = useState(false)

    /**
     * Estado donde se guarda el usuario sin modificar
     */
    const [currentUser, setCurrentUser] = useState({id: null, name: "", username: ""})

    /**
     * Modifica el usuario
     * @param {*} user
     */
    const editRow = user => {
    setEditing(true)
    setCurrentUser({ id: user.id, name: user.name, username: user.username })
    }

    /**
     * Actualiza el usuario en el array
     * @param {*} id
     * @param {*} updatedUser
     */
    const updateUser = (id, updatedUser) => {
    setEditing(false)
    setUsers(users.map(user => (user.id === id ? updatedUser : user)))
    }

    return (
        <div className="container">
            <h1>CRUD App with Hooks</h1>
            <div className="flex-row">
                <div className="flex-large">
                    {
                        editing ? (
                            <div>
                                <h2>Edit user</h2>
                                <EditUserForm
                                currentUser={currentUser}
                                updateUser={updateUser}
                                />
                            </div>
                        ) : (
                            <div>
                                <h2>Add user</h2>
                                <AddUserForm addUser={addUser}/>
                            </div>
                        )
                    }

                    </div>
                    <div className="flex-large">
                    <h2>View users</h2>
                    <UserTable
                    users={users}
                    deleteUser={deleteUser}
                    editRow={editRow}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
