import {firebase, provider} from '../services/firebase'

export const login = function(uid) {
    return {
        type: 'LOGIN',
        uid: uid
    }
}

export const startLogin = function() {
    return function() {
        return firebase.auth().signInWithPopup(provider)
    }
}

export const logout = function() {
    return {
        type: 'LOGOUT'
    }
}

export const startLogout = function() {
    return function() {
        return firebase.auth().signOut()
    }
}