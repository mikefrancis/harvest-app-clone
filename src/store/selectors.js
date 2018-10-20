export const getAuthorizationHeader = state => `${state.auth.token_type} ${state.auth.access_token}`
