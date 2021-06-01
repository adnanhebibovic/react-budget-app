import React from 'react'
import { Redirect } from 'react-router';
import {connect} from 'react-redux'
import {startLogin} from '../actions/auth'

function LoginPage(props) {

    if (!props.isAuthenticated) {
        return (
            <div>
                <button onClick={props.startLogin}>Login</button>
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
    
