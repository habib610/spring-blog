import Container from "../../components/global/Container";
import MyPosts from "../../components/profile/MyPosts";
import UserDetails from "../../components/profile/UserDetails";

const Profile = () => {
    return (
        <div className="min-h-screen">
            <div className="min-h-[30vh] bg-gradient-to-r from-purple-500 to-pink-500 "></div>
            <Container className="py-0">
                <div className="h-full lg:w-8/12 mx-auto">
                    {/* USER DETAILS */}
                    <UserDetails />

                    {/* USER POST */}
                    <MyPosts />
                    <h1>hello </h1>
                </div>
            </Container>
        </div>
    );
};

export default Profile;
