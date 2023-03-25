import React, { useState } from "react";
import api from "./api/index";
import Users from "./components/users";
import SearchStatus from "./components/searchStatus";

const App = () => {
    // отображает орисовку юзеров Users
    const [users, setUsers] = useState(api.users.fetchAll());

    const handleDelete = (id) => {
        setUsers(users.filter((user) => user._id !== id));
    };

    const handleFavourites = (id) => {
        const newUsers = users.map((user) => {
            if (user._id === id) {
                user.bookmark = !user.bookmark;
                return user;
                // return {...user, bookmark: !user.bookmark}
            }
            return user;
        });
        setUsers(newUsers);
    };

    return (
        <div>
            <SearchStatus length={users.length} />
            <Users
                onDelete={handleDelete}
                onFavorites={handleFavourites}
                users={users}
            />
        </div>
    );
};

export default App;
