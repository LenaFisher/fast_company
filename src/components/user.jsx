import React from "react";
import PropTypes from "prop-types";
import Qualities from "./qualities";

const User = ({
    _id,
    name,
    profession,
    qualities,
    completedMeetings,
    rate,
    bookmark,
    onFavorites,
    onDelete
}) => {
    const fav = () => {
        let classFav = "bi-bookmark";
        classFav += bookmark ? "-fill" : "";
        return classFav;
    };

    return (
        <>
            <tr>
                <td>{name}</td>
                <td>
                    <Qualities qualities={qualities} />
                </td>
                <td>{profession.name}</td>
                <td>{completedMeetings}</td>
                <td>{rate}</td>
                <td>
                    <i
                        className={fav()}
                        onClick={() => {
                            onFavorites(_id);
                        }}
                    ></i>
                </td>
                <td>
                    <button
                        className="btn btn-danger"
                        onClick={() => {
                            onDelete(_id);
                        }}
                    >
                        delete
                    </button>
                </td>
            </tr>
        </>
    );
};

User.propTypes = {
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    profession: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    }).isRequired,
    qualities: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            color: PropTypes.string.isRequired
        })
    ),
    completedMeetings: PropTypes.number.isRequired,
    rate: PropTypes.number.isRequired,
    bookmark: PropTypes.bool.isRequired,
    onFavorites: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default User;
