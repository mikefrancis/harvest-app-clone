import client from './../lib/client';
import store from './store';

export const SET_USER = 'SET_USER';
export const SET_PROJECT = 'SET_PROJECT';
export const SET_PROJECTS = 'SET_PROJECTS';
export const GET_PROJECTS = 'GET_PROJECTS';
export const SET_AUTH = 'SET_AUTH';
export const SET_TASK = 'SET_TASK';
export const SET_TEAM = 'SET_TEAM';
export const SET_LOADING = 'SET_LOADING';

export const setLoading = isLoading => ({
    type: SET_LOADING,
    isLoading,
});

export const login = credentials => async dispatch => {
    dispatch(setLoading(true));

    try {
        const authResponse = await client.post('/oauth/token', {
            ...credentials,
            grant_type: 'password',
            client_id: process.env.REACT_APP_API_KEY,
            client_secret: process.env.REACT_APP_API_SECRET,
        });

        dispatch(setAuth(authResponse.data));

        return dispatch(getUser(authResponse.data));
    } catch (error) {
        //dispatch(setError(error));
        console.log(error);

        return dispatch(setLoading(false));
    }
};

export const getUser = auth => async dispatch => {
    dispatch(setLoading(true));

    try {
        const userResponse = await client.get('/account', getAuthHeaders());

        dispatch(setUser(userResponse.data.data));

        return dispatch(setLoading(false));
    } catch (error) {
        //dispatch(setError(error));
        console.log(error);

        return dispatch(setLoading(false));
    }
};

export const setAuth = data => ({
    type: SET_AUTH,
    data,
});

export const setUser = data => ({
    type: SET_USER,
    data,
});

export const setTeam = data => ({
    type: SET_TEAM,
    data,
});

export const getProjects = team => async dispatch => {
    dispatch(setLoading(true));

    try {
        const response = await client.get(`/teams/${team}/projects`, getAuthHeaders());

        dispatch(setProjects(response.data.data));

        return dispatch(setLoading(false))
    } catch (error) {
        // dispatch(setError(error));

        return dispatch(setLoading(false));
    }
};

export const setProject = data => ({
    type: SET_PROJECT,
    data,
});

export const setProjects = data => ({
    type: SET_PROJECTS,
    data,
});

export const createTask = data => async dispatch => {
    dispatch(setLoading(true));

    try {
        const response = await client.post(`/teams/${data.team}/projects/${data.project}/tasks`, {
            name: data.name,
            description: data.description,
            started_at: data.started_at,
        }, getAuthHeaders());

        dispatch(setTask(response.data.data));

        return dispatch(setLoading(false))
    } catch (error) {
        // dispatch(setError(error));

        return dispatch(setLoading(false));
    }
};

export const setTask = data => ({
    type: SET_TASK,
    data,
});

export const stopTask = data => async dispatch => {
    dispatch(setLoading(true));

    try {
        await client.patch(`/teams/${data.team}/projects/${data.project}/tasks/${data.task}`, {
            ended_at: data.ended_at,
        }, getAuthHeaders());

        dispatch(setTask(null));

        return dispatch(setLoading(false));
    } catch (error) {
        // dispatch(setError(error));

        return dispatch(setLoading(false));
    }
};

const getAuthHeaders = () => {
    const {
        token_type,
        access_token,
    } = store.getState().auth;

    return {
        headers: {
            Authorization: `${token_type} ${access_token}`,
        },
    };
};
