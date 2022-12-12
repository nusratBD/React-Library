import React from 'react';

const Link = (props) => {
    const {name, route} = props.route;
    return (
        <li className="mr-16">
            <a href={route}>{name}</a>
        </li>
    );
};

export default Link;