import { BsListTask } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FiUsers } from "react-icons/fi";
import { RxDashboard } from "react-icons/rx";

export const BASE_URL =
    process.env.NODE_ENV === "production"
        ? process.env.REACT_APP_BASE_API_URL_PROD
        : process.env.REACT_APP_BASE_API_URL_DEV;

export const HOME = "/";
export const LOGIN = "/login";
export const REGISTRATION = "/registration";
export const WRITE = "/write";
export const SEARCH = "/search";
export const STORY = "/story";

export const DASHBOARD = "/dashboard";
export const PROFILE = "/profile";
export const CATEGORY = "/category";
export const USERS = "/users";
export const ADD_CATEGORY = "/add-category";

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

export const menuLinks = [
    {
        id: 1,
        label: "Dashboard",
        link: DASHBOARD,
        isAdmin: true,
        icon: RxDashboard,
    },
    {
        id: 2,
        label: "Add Category",
        link: ADD_CATEGORY,
        isAdmin: true,
        icon: BsListTask,
    },
    {
        id: 3,
        label: "Profile",
        link: PROFILE,
        icon: CgProfile,
        isAdmin: false,
    },
    {
        id: 4,
        label: "Users",
        link: USERS,
        icon: FiUsers,
        isAdmin: true,
    },
];

// Endpoints
export const ALL_POST_ENDPOINT = "/api/posts";

export const CREATE_POST_ENDPOINT = "/api/user";
export const UPLOAD_IMAGE_POST_ENDPOINT = "/api/posts/image/upload";
export const RELATED_POST_BY_CATEGORY_ENDPOINT = "/api/category";
export const COMMENT_ENDPOINT = "/api/post";
export const SEARCH_POST_ENDPOINT = "/api/posts/search";
export const USER_LIST_ENDPOINT = "/api/users/";
export const TOP_POST_ENDPOINT = "/api/posts/top";

export const GET_SIMILAR_USER_POST_ENDPOINT = "/api/users";
export const REGISTRATION_ENDPOINT = "/api/v1/auth/register";
export const LOGIN_ENDPOINT = "/api/v1/auth/login";
export const LATEST_POST_ENDPOINT = "/api/posts";
export const DELETE_POST_ENDPOINT = "/api/posts";
export const UPDATE_POST_ENDPOINT = "/api/posts";
export const GET_POST_BY_CATEGORY_ENDPOINT = "/api/category";
export const BLOG_IMAGE_ENDPOINT = BASE_URL + "/api/post/image/";
export const CATEGORY_ENDPOINT = "/api/category/";

// USER ROLE
export const ROLE_ADMIN = "ROLE_ADMIN";
export const ROLE_USER = "ROLE_USER";
export const ROLES = [ROLE_ADMIN, ROLE_USER];

// Auth
export const localUser = "hrUser";
