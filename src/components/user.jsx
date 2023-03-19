import React from "react";
import Qualities from "./qualities"


const User = (props) => {
    
    const fav = () => {
        let classFav = "bi-bookmark"
        classFav += props.user.bookmark ? "-fill" : ""
        return classFav
    }
 
    return (
        <>
            <tr>
                <td>{props.user.name}</td>
                <td><Qualities {...props.user} /></td>
                <td>{props.user.profession.name}</td>
                <td>{props.user.completedMeetings}</td>
                <td>{props.user.rate}</td>
                <td><i className={fav()} onClick={() => { props.onFavorites(props.user._id) }}></i></td>
                <button className="btn btn-danger"
                    onClick={() => {
                        props.onDelete(props.user._id);
                    }}>delete</button>
            </tr>
        </>
    )
}

export default User