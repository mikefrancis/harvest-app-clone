import { SET_AUTH, SET_TEAM } from './actions';

export const persist = store => next => action => {
    if (action.type === SET_AUTH) {
        !localStorage.getItem('auth') && localStorage.setItem('auth', JSON.stringify(action.data));
    }

    if (action.type === SET_TEAM) {
        !localStorage.getItem('team') && localStorage.setItem('team', action.data);
    }

    return next(action);
};
