import React, { useState } from "react";
import api from "../api/index"
import "bootstrap/dist/css/bootstrap.css";



const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll())

    const handleDelete = (id) => {
        setUsers((prevState) => prevState.filter((user) => user._id != id))
    }

    const renderQualities = (qualities) => {
        return (
            qualities.map((q) =>

                <span className={"badge bg-" + q.color}>{q.name}</span>

            )
        )
    }

    const renderUser = () => {
        return (
            users.length !== 0 && users.map(user =>
                <>
                    <tr>
                        <th scope="row">{user.name}</th>
                        <td>{renderQualities(user.qualities)}</td>

                        <td>{user.profession.name}</td>
                        <td>{user.completedMeetings}</td>
                        <td>{user.rate}</td>
                        <button className="btn btn-danger btn-sm" type="button" key={user._id} onClick={() => { handleDelete(user._id) }}>delete</button>
                    </tr>
                </>
            )
        )
    }

    if (users.length === 0) {
        return <span className="badge bg-danger">Никто не тусанет с тобой</span>
    }


    const handlePhrase = (number) => {
        return (
            number === 4 || number === 3 || number === 2 ? "человека  тусанут" : "человек тусанет"
        )
    }
    return (
        <>
            <span className="badge bg-primary">{(users.length)} {handlePhrase(users.length)} с тобой сегодня</span>
            <table className="table table-primary">
                <thead>
                    <tr className="table">
                        <th scope="col">Имя</th>
                        <th scope="col">Качества</th>
                        <th scope="col">Провфессия</th>
                        <th scope="col">Встретился, раз</th>
                        <th scope="col">Оценка</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                {renderUser()}
            </table></>
    )
}

export default Users