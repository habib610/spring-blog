export interface Comment {
    id: number;
    content: string;
}
export interface Role {
    id: number;
    name: string;
}
export interface User {
    id: number;
    name: string;
    about: string;
    email: string;
    password: string;
    roles: Role[];
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
