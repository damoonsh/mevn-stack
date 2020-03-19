import store from '../store/index'

export function isLoggedIn() {
    const token = localStorage.getItem('token');
    return token != null;
}

export function login() {
    const token = {
        username: 'david'
    }
    setToken(token);
}

function setToken(token) {
    localStorage.setItem('token', JSON.stringify(token));
    store.dispatch('authenticate');
}

export function getUserName() {
    
}

export function getUserId() {
    
}