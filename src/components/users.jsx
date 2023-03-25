import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import User from "./user";
import PropTypes from "prop-types";
import Pagination from "./pagination";
import paginate from "../utils/paginate";

const Users = ({ users, ...rest }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const count = users.length;
    const pageSize = 4;
    // console.log(users);

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    const usersCrop = paginate(users, currentPage, pageSize);
    // отрисовывает юзеров User
    return (
        <>
            {count > 0 && (
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Имя</th>
                            <th scope="col">Качества</th>
                            <th scope="col">Профессия</th>
                            <th scope="col">Встретился, раз</th>
                            <th scope="col">Рейтинг</th>
                            <th scope="col">Избранное</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {usersCrop.map((user) => (
                            <User
                                key={user._id}
                                {...user}
                                {...rest}
                            />
                        ))}
                    </tbody>
                </table>
            )}
            <Pagination
                itemsCount={count}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handlePageChange}
            />
            {/* 1,2,3 */}
            {/* общ кол-во юзеров/сколько юз выводим на странице за раз */}
        </>
    );
};

Users.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            profession: PropTypes.arrayOf(PropTypes.shape({
                _id: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired
            })).isRequired,
            qualities: PropTypes.shape(PropTypes.shape({
                _id: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                color: PropTypes.string.isRequired
            })).isRequired,
            completedMeetings: PropTypes.number.isRequired,
            rate: PropTypes.number.isRequired,
            bookmark: PropTypes.bool.isRequired
        })
    ).isRequired
};

export default Users;
