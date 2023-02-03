import AdminCard from "../../components/admin/AdminCard";
import Container from "../../components/global/Container";
import images from "../../constants/images";
import { CATEGORY, DASHBOARD, HOME, USERS } from "../../constants/routes";
const Dashboard = () => {
    return (
        <Container>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-24">
                <AdminCard src={images.users} title="Users" link={`${USERS}`} />
                <AdminCard src={images.home} title="Home" link={`${HOME}`} />
                <AdminCard
                    src={images.category}
                    title="Categories"
                    link={CATEGORY}
                />
                <AdminCard
                    src={images.activity}
                    title="Activity"
                    link={DASHBOARD}
                />
            </div>
        </Container>
    );
};

export default Dashboard;
