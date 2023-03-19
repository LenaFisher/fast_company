import React from "react"


const Qualities = (user) => {

    return (
        <>
            {user.qualities.map((q) => (<span className={"badge m-1 bg-" + q.color} key={q._id}>{q.name + " "} </span>))}
        </>
    )
}

export default Qualities;

