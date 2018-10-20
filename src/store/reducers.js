import * as actions from './actions';

const initialState = {
    ui: {
        isLoading: false,
    },
    auth: null,
    user: null,
    team: null,
    project: null,
    projects: [],
    task: null,
};

export const ui = (state = initialState.ui, action) => {
    switch (action.type) {
        case actions.SET_LOADING:
            return {
                ...state,
                isLoading: action.isLoading,
            };

        default:
            return state;
    }
};

export const auth = (state = initialState.auth, action) => {
    switch (action.type) {
        case actions.SET_AUTH:
            return {
                ...action.data,
            };

        default:
            return state;
    }
};

export const user = (state = initialState.user, action) => {
    switch (action.type) {
        case actions.SET_USER:
            return {
                ...action.data,
            };

        default:
            return state;
    }
};

export const project = (state = initialState.project, action) => {
    switch (action.type) {
        case actions.SET_PROJECT:
            return action.data;

        default:
            return state;
    }
};

export const projects = (state = initialState.projects, action) => {
    switch (action.type) {
        case actions.GET_PROJECTS:
            return {
                ...action.data,
            };

        case actions.SET_PROJECTS:
            return action.data;

        default:
            return state;
    }
};

export const task = (state = initialState.task, action) => {
    switch (action.type) {
        case actions.SET_TASK:
            return action.data;

        default:
            return state;
    }
};

export const team = (state = initialState.team, action) => {
    switch (action.type) {
        case actions.SET_TEAM:
            return action.data;

        default:
            return state;
    }
};
