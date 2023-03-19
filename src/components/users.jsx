import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import User from "./user"
import SearchStatus from "./searchStatus"



const Users = ({onDelete,onFavorites, users}) => {


    // отрисовывает юзеров User
    return (
        <>
            <SearchStatus length={users.length} />
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Имя</th>
                        <th scope="col">Качества</th>
                        <th scope="col">Провфессия</th>
                        <th scope="col">Встретился, раз</th>
                        <th scope="col">Рейтинг</th>
                        <th scope="col">Избранное</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => <User key={user._id} user={user}
                    onDelete={onDelete}
                    onFavorites={onFavorites}
                     />)}

                </tbody>
            </table>
        </>
    )
}

export default Users