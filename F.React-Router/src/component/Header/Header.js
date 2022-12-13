import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import NotFound from '../NotFound/NotFound';

const Header = () => {
    return (
        <div>
            <h1>This is Our Fancy Routing Header!!!</h1>
            <NavLink to='/home' style={({ isActive, isPending }) => {
                return {
                    color: isActive ? "red" : "inherit",
                };
            }}
                className={({ isActive, isPending }) => {
                    return isActive ? "active" : isPending ? "pending" : "";
                }}>Home</NavLink>
            <NavLink to='/about' style={({ isActive, isPending }) => {
                return {
                    color: isActive ? "red" : "inherit",
                };
            }}
                className={({ isActive, isPending }) => {
                    return isActive ? "active" : isPending ? "pending" : "";
                }}>About</NavLink>
            <NavLink to='/contact' style={({ isActive, isPending }) => {
                return {
                    color: isActive ? "red" : "inherit",
                };
            }}
                className={({ isActive, isPending }) => {
                    return isActive ? "active" : isPending ? "pending" : "";
                }}>Contact</NavLink>
            <NavLink to='/friends' style={({ isActive, isPending }) => {
                return {
                    color: isActive ? "red" : "inherit",
                };
            }}
                className={({ isActive, isPending }) => {
                    return isActive ? "active" : isPending ? "pending" : "";
                }}>Friends</NavLink>
                <Link to='*' element={<NotFound></NotFound>}></Link>
        </div>
    );
};

export default Header;