import React from 'react';
import { useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const {name, username, id} = props.friend;
    const navigate = useNavigate();
    const friendDetail = () =>{
        const path = `/friend/${id}`;
        navigate(path);
    }
    return (
        <div>
            <h2>{name}</h2>
            <button onClick={friendDetail}>{username} id:{id}</button>
        </div>
    );
};

export default Friend;