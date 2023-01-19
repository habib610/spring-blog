import Container from "../../components/global/Container";

import StoryPage from "../../components/story/StoryPage";
import { StorySidebar } from "../../components/story/StorySidebar";

export const POST = {
    id: 1,
    title: "What You Probably Don’t Know About Your Pastor When He Preaches",
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

        Why do we use it?
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`,
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
        },
    ],
};

const ReadContent = () => {
    return (
        <>
            <div className="min-h-screen ">
                <Container>
                    <div className="flex flex-col lg:flex-row pt-24">
                        <div className="lg:w-7/12  px-3 lg:px-3 ">
                            <StoryPage />
                        </div>
                        <div className="w-full lg:w-5/12  px-3 lg:px-3 ">
                            <StorySidebar />
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default ReadContent;
