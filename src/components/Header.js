import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

import {startLogout} from '../actions/auth'

function Header(props) {
    if (!props.isAuthenticated) {
        return null;   
    }

    return (
        <header>
            <h1>Budget app</h1>
            <ul>
                <li>
                    <NavLink to="/dashboard">Dashboard</NavLink>
                </li>
                <li>
                    <NavLink to="/expenses">Create</NavLink>
                </li>
            </ul>
            <button onClick={props.startLogout}>Logout</button>
        </header>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: !!state.auth.uid
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        startLogout: () => dispatch(startLogout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)