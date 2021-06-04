import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

import {startLogout} from '../actions/auth'

function Header(props) {
    if (!props.isAuthenticated) {
        return null;   
    }

    return (
        <header className="header">
            <div className="content-container">
                <div className="header__content">
                    <NavLink className="header__title" to="/dashboard">
                        <h1>Budget</h1>
                    </NavLink>
                    <button className="button button--link" onClick={props.startLogout}>Logout</button>
                </div>
            </div>
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