import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <NavLink to="/home"
                style={({ isActive, isPending }) => {
                    return {
                        color: isActive ? "red" : "inherit",
                    };
                }}
                className={({ isActive, isPending }) => {
                    return isActive ? "active" : isPending ? "pending" : "";
                }}
            >Home</NavLink>
            <NavLink to="/posts"
                style={({ isActive, isPending }) => {
                    return {
                        color: isActive ? "red" : "inherit",
                    };
                }}
                className={({ isActive, isPending }) => {
                    return isActive ? "active" : isPending ? "pending" : "";
                }}
            >Posts</NavLink>
        </div>
    );
};

export default Header;