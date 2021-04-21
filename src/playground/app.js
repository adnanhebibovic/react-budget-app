import React from 'react'
import ReactDOM from 'react-dom'

function Info(props) {
    return (
        <div>
            <h1>Info</h1>
            <p>{props.msg}</p>
        </div>
    )
}

function withAuthentication(WrappedComponent) {
    return (props) => (
        <div>
            {
                props.isAuthenticated
                ? <WrappedComponent {...props}></WrappedComponent> 
                : <h1>Please login</h1>
            }
        </div>
    )
}

const AuthInfo = withAuthentication(Info);

ReactDOM.render(<AuthInfo isAuthenticated={true} msg="These are the secret details..."></AuthInfo>, document.getElementById('root'))