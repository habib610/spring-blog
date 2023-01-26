export const HOME = "/";
export const LOGIN = "/login";
export const REGISTRATION = "/registration";
export const WRITE = "/write";
export const UNAUTHORIZED = "/unauthorized";

export const links = [
    {
        id: 1,
        label: "Home",
        link: HOME,
    },
    {
        id: 3,
        label: "Login",
        link: LOGIN,
    },
    {
        id: 4,
        label: "Signup",
        link: REGISTRATION,
    },
];
export const authLinks = [
    {
        id: 1,
        label: "Home",
        link: HOME,
    },
    {
        id: 2,
        label: "Write",
        link: WRITE,
    },
];

// Endpoints
export const ALL_POST_ENDPOINT = "/api/posts";
export const REGISTRATION_ENDPOINT = "/api/v1/auth/register";
export const LOGIN_ENDPOINT = "/api/v1/auth/login";
export const LATEST_POST_ENDPOINT = "/api/posts";
export const BLOG_IMAGE_ENDPOINT =
    process.env.REACT_APP_BASE_API_URL + "/api/post/image/";

// USER ROLE
export const ROLE_ADMIN = "ROLE_ADMIN";
export const ROLE_USER = "ROLE_USER";
export const ROLES = [ROLE_ADMIN, ROLE_USER];

// Auth
export const localUser = "hrUser";
