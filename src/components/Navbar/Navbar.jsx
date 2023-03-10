import React from 'react'
import classes from './Navbar.module.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return(
        <nav className={classes.nav}>
            <div className= {classes.item}><NavLink className={(navData) => navData.isActive ? classes.active : classes.item} to='/profile'>Profile</NavLink></div>
            <div className= {classes.item}><NavLink className={(navData) => navData.isActive ? classes.active : classes.item} to='/dialogs'>Messages</NavLink></div>
            <div className= {classes.item}><NavLink className={(navData) => navData.isActive ? classes.active : classes.item} to='/users'>Users</NavLink></div>
            <div className= {classes.item}><a>News</a></div>
            <div className= {classes.item}><a>Music</a></div>
            <div className= {classes.item}><a>Settings</a></div>
        </nav>
    )
}

export default Navbar
