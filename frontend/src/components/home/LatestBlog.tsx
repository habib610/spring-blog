import Title from "../global/Title";
import VerticalCard from "../global/VerticalCard";

const POST = {
    id: 1,
    title: "What You Probably Don’t Know About Your Pastor When He Preaches",
    content:
        "What happens when your preacher preaches? I know…that’s a loaded question. I guess I s hould state it this way: Are you aware of what takes place when the pastor gets up to expound Scriptur",
    imageName:
        "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    addedDate: "2023-01-11T11:21:01.943+00:00",
    category: {
        categoryId: 1,
        categoryTitle: "This Algorithm Category ",
        categoryDescription: "All description goes to Algorithm ",
    },
    users: {
        id: 1,
        name: "Habib",
        about: "I am about of user 14",
        email: "user1@gmail.com",
        password:
            "$2a$10$NrqALmN.VcB5ENQrtiaHZOtaStkKwYhfTGumqJTdeqSa02diasXyO",
        roles: [
            {
                id: 1001,
                name: "ROLE_USER",
            },
        ],
    },
    comments: [
        {
            id: 1,
            content: "Comment 1",
            userName: "HABIB",
            userId: 1,
        },
    ],
};
const POST2 = {
    id: 1,
    title: "What You Probably Don’t Know About Your Pastor When He Preaches",
    content:
        "What happens when your preacher preaches? I know…that’s a loaded question. I guess I s hould state it this way: Are you aware of what takes place when the pastor gets up to expound Scriptur",
    imageName:
        "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    addedDate: "2023-01-11T11:21:01.943+00:00",
    category: {
        categoryId: 1,
        categoryTitle: "This Algorithm Category ",
        categoryDescription: "All description goes to Algorithm ",
    },
    users: {
        id: 1,
        name: "Habib",
        about: "I am about of user 14",
        email: "user1@gmail.com",
        password:
            "$2a$10$NrqALmN.VcB5ENQrtiaHZOtaStkKwYhfTGumqJTdeqSa02diasXyO",
        roles: [
            {
                id: 1001,
                name: "ROLE_USER",
            },
        ],
    },
    comments: [
        {
            id: 1,
            content: "Comment 1",
            userName: "HABIB",
            userId: 1,
        },
    ],
};
const POST3 = {
    id: 1,
    title: "What You Probably Don’t Know About Your Pastor When He Preaches",
    content:
        "What happens when your preacher preaches? I know…that’s a loaded question. I guess I s hould state it this way: Are you aware of what takes place when the pastor gets up to expound Scriptur",
    imageName:
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    addedDate: "2023-01-11T11:21:01.943+00:00",
    category: {
        categoryId: 1,
        categoryTitle: "This Algorithm Category ",
        categoryDescription: "All description goes to Algorithm ",
    },
    users: {
        id: 1,
        name: "Habib",
        about: "I am about of user 14",
        email: "user1@gmail.com",
        password:
            "$2a$10$NrqALmN.VcB5ENQrtiaHZOtaStkKwYhfTGumqJTdeqSa02diasXyO",
        roles: [
            {
                id: 1001,
                name: "ROLE_USER",
            },
        ],
    },
    comments: [
        {
            id: 1,
            content: "Comment 1",
            userName: "HABIB",
            userId: 1,
        },
    ],
};

const LatestBlog = () => {
    return (
        <div>
            <Title title="Latest Stories" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-10 mt-4">
                <VerticalCard />
            </div>
        </div>
    );
};

export default LatestBlog;
