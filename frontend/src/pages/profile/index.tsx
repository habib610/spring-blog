import Container from "../../components/global/Container";
import MyPosts from "../../components/profile/MyPosts";
import UserDetails from "../../components/profile/UserDetails";

const Profile = () => {
    return (
        <Container>
            <div className="min-h-screen pt-24">
                {/* USER DETAILS */}
                <UserDetails />
                {/* USER POST */}
                <MyPosts />
            </div>
        </Container>
    );
};

export default Profile;
