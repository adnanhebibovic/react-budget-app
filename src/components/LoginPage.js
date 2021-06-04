import React from 'react'
import { Redirect } from 'react-router';
import {connect} from 'react-redux'
import {startLogin} from '../actions/auth'

function LoginPage(props) {
    if (!props.isAuthenticated) {
        return (
            <div className="box-layout">
                <div className="box-layout__box">
                    <h1 className="box-layout__title">Budget</h1>
                    <p>It's time to get your expenses under control</p>
                    <button className="button" onClick={props.startLogin}>Login with Google</button>
                </div>
            </div>
        )
    }

    return (
        <Redirect to="/dashboard"></Redirect>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: !!state.auth.uid
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        startLogin: () => dispatch(startLogin())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
    
