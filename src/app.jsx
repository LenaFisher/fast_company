import React, { useState } from "react";
import api from "./api/index"
import Users from "./components/users";


const App = () => {
    // отображает орисовку юзеров Users
    const [users, setUsers] = useState(api.users.fetchAll())

    const handleDelete = (id) => {
        setUsers(users.filter((user) => user._id !== id))
    }

    const handleFavourites = (id) => {
        let newUsers = users.map(user => {
            if (user._id === id) {
                user.bookmark = !user.bookmark
                return user
            }
            return user
        })
        setUsers(newUsers)
    }

    return (
        <Users
            onDelete={handleDelete}
            onFavorites={handleFavourites}
            users={users}
        />
    )
}

export default App;
