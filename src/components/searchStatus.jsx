import React from "react";

const SearchStatus = (users) => {
    // console.log(users)

    const renderPhrase = (number) => {
        const lastOne = Number(number.toString().slice(-1));
        if (number > 4 && number < 15) return "человек тусанет";
        if ([2, 3, 4].indexOf(lastOne) >= 0) return "человека тусанут";
        if (lastOne === 1) return "человек тусанет";
        return "человек тусанет";
    };

    return (
        <>
            <h1
                className={
                    users.length > 0 ? "badge bg-primary" : "badge bg-danger"
                }
            >
                {users.length > 0
                    ? users.length +
                      " " +
                      renderPhrase(users.length) +
                      " с тобой сегодня"
                    : "Никто с тобой не тусанет"}
            </h1>
        </>
    );
};

export default SearchStatus;
