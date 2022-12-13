import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const params = useParams();
    const [friend, setFriend] = useState({});
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${params.fid}`)
        .then(res=>res.json())
        .then(data=>setFriend(data));
    },[params])
    return (
        <div>
            <h1>Details About Dost Number: {params.fid}</h1>
            <h2>Name: {friend.name}</h2>
            <h3>Phone: {friend.phone}</h3>
            <h3>Email: {friend.email}</h3>
            <h4>Website: {friend.website}</h4>
            <h5>City: {friend.address?.city}</h5>
            <h6>Latitude: {friend.address?.geo.lat}</h6>
        </div>
    );
};

export default FriendDetail;