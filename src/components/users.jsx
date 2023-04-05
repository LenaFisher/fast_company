import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import User from "./user";
import PropTypes from "prop-types";
import Pagination from "./pagination";
import paginate from "../utils/paginate";
import api from "../api/index";
import GroupList from "../components/groupList";
import SearchStatus from "./searchStatus";

const Users = ({ users, ...rest }) => {
    // для пагинации
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 2;

    // для получения списка профессий + с пом useEffect
    const [professions, setProfessions] = useState();
    // следить за выбором профессии
    const [selectedProf, setSelectedProf] = useState();

    // тк мы имитируем запрос асинхронный, оборач в все в useEffect, как только данный "придут" страница перерисуется
    useEffect(() => {
        api.professions.fetchAll().then((data) => setProfessions(data));
    }, []);
    // console.log(professions); было //{doctor: {…}, waiter: {…}, physics: {…}, engineer: {…}, actor: {…},…}

    // кажд раз когда челк на професс список будет показ с первой стр. Следим за selectedProf, если помен - текущ стр меняется на 1
    // useEffect следит на выбр професс и отрис заново если меняется selectedProf выбр профессия
    useEffect(() => {
        setCurrentPage(1);
    }, [selectedProf]);

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    };

    // при клике меняется выбр проф
    const handleProfessionSelect = (item) => {
        setSelectedProf(item);
    };
    // как только щелк на фильтре, сразу начин фильтров по проф

    const filteredUsers = selectedProf
        ? users.filter((user) => user.profession._id === selectedProf._id)
        : users;

    const count = filteredUsers.length; // 12

    // метод откатывает професии на изначальное состояние
    const clearFilter = () => {
        setSelectedProf();
    };
    // стало отобр при пагин только фильтров юзеры
    const usersCrop = paginate(filteredUsers, currentPage, pageSize);

    // было при пагинац отобор всех юзеров
    // const usersCrop = paginate(users, currentPage, pageSize);
    // отрисовывает юзеров User
    return (
        <>
            <div className="d-flex">
                {/* // если профессии уже "пришли" то отображ GroupList */}
                {professions && (
                    <div className="d-flex flex-column flex-shrink-0 p-3">
                        <GroupList
                            // selectedProf это професс на которой щелкнули
                            selectedItem={selectedProf}
                            items={professions}
                            onItemSelect={handleProfessionSelect}
                            // указали в дефолтпроп
                            // valueProperty="_id"
                            // contentProperty="name"
                        />
                        <button
                            onClick={clearFilter}
                            className="btn btn-secondary mt-2"
                        >
                            Очистить
                        </button>
                    </div>
                )}
                <div className="d-flex flex-column">
                    <SearchStatus length={count} />
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
                                    <User key={user._id} {...user} {...rest} />
                                ))}
                            </tbody>
                        </table>
                    )}
                    <div className="d-flex justify-content-center">
                        <Pagination
                            itemsCount={count}
                            pageSize={pageSize}
                            currentPage={currentPage}
                            onPageChange={handlePageChange}
                        />
                        {/* 1,2,3 */}
                        {/* общ кол-во юзеров/сколько юз выводим на странице за раз */}
                    </div>
                </div>
            </div>
        </>
    );
};

Users.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            profession: PropTypes.shape({
                _id: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired
            }),
            qualities: PropTypes.arrayOf(
                PropTypes.shape({
                    _id: PropTypes.string.isRequired,
                    name: PropTypes.string.isRequired,
                    color: PropTypes.string.isRequired
                })
            ).isRequired,
        completedMeetings: PropTypes.number.isRequired,
        rate: PropTypes.number.isRequired,
        bookmark: PropTypes.bool.isRequired
        })
    ).isRequired
};

export default Users;
