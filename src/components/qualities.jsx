import React from "react";
import PropTypes from "prop-types";

const Qualities = (user) => {
    // console.log(user);
    return (
        <>
            {user.qualities.map((q) => (
                <span className={"badge m-1 bg-" + q.color} key={q._id}>
                    {q.name + " "}{" "}
                </span>
            ))}
        </>
    );
};

Qualities.proptype = {
    qualities: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            color: PropTypes.string.isRequired
        })
    )
};

export default Qualities;
