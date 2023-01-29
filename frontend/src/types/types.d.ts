export interface Comment {
    id: number;
    content: string;
    userName: string;
    userId: number;
}
export interface Role {
    id?: number;
    name?: string;
}
export interface User {
    id?: number;
    name: string;
    about: string;
    email: string;
    password?: string;
    roles?: Role[];
}
export interface Category {
    categoryId: number;
    categoryTitle: string;
    categoryDescription: string;
}
export interface Post {
    id: number;
    title: string;
    content: string;
    imageName: string;
    addedDate: string;
    category: Category;
    users: User;
    comments: Comment[];
}

export interface StoryContent {
    content: Post[];
    pageNumber: number;
    pageSize: number;
    totalElements: number;
    lastPage: boolean;
    firstPage: boolean;
}

export interface RegistrationFormData {
    name: string;
    email: string;
    about: string;
    password: string;
    confirmPassword?: string;
}

export interface LoginFormData {
    email: string;
    password: string;
}
export interface LoginFormError {
    emailError: string;
    passwordError: string;
}
export interface StoryFormError {
    titleError: string;
    contentError: string;
}
export interface StoryForm {
    title: string;
    content: string;
}
export interface RegistrationFormError {
    nameError?: string;
    emailError?: string;
    aboutError?: string;
    passwordError?: string;
    confirmPasswordError?: string;
}

export type LatestStoryAPI = {
    pageSize?: number;
    pageNumber?: number;
    sort?: string;
    order?: string;
};
export type Paginate = {
    pageNumber: number;
    pageSize: number;
    totalElements: number;
    isLoading: boolean;
    lastPage: boolean;
    firstPage: boolean;
};
