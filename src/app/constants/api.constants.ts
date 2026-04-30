/**
 * API Endpoints Configuration
 * Centralized place to define all API endpoints
 * Services should use only these endpoints
 */

export const API_ENDPOINTS = {
    AUTH: {
        LOGIN: '/login',
        REGISTER: '/register',
        SEND_OTP: '/send-otp',
        VERIFY_OTP: '/verify-otp',
        LOGOUT: '/logout',
        REFRESH_TOKEN: '/refresh-token'
    },
    USER: {
        GET_PROFILE: '/profile',
        UPDATE_PROFILE: '/profile/update',
        CHANGE_PASSWORD: '/change-password'
    },
    CRUD: {
        GET_ALL: '/items',
        GET_BY_ID: '/items/:id',
        CREATE: '/items',
        UPDATE: '/items/:id',
        DELETE: '/items/:id'
    }
};
