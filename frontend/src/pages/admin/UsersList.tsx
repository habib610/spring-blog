import { useEffect } from "react";
import TableHeader from "../../components/admin/TableHeader";
import TableRow from "../../components/admin/TableRow";

import Container from "../../components/global/Container";
import Message from "../../components/global/Message";
import { useAppDispatch, useAppSelector } from "../../redux/app/hooks";
import {
    getUserList,
    selectUserList,
} from "../../redux/features/user-list/userListSlice";

const UsersList = () => {
    const { error, isError, isLoading, usersList } =
        useAppSelector(selectUserList);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getUserList());
    }, [dispatch]);

    let showUserList = null;

    if (isLoading) {
        showUserList = (
            <div>
                {[1, 2, 3, 4, 5].map((item) => (
                    <div
                        key={item}
                        className="w-full h-16 bg-slate-200 animate-pulse mb-4=2"
                    ></div>
                ))}
            </div>
        );
    }
    if (!isLoading && isError) {
        showUserList = <Message error={true} message={error} />;
    }
    if (!isLoading && usersList.length > 0) {
        showUserList = (
            <div>
                {usersList.map((item) => (
                    <TableRow key={item.id} data={item} />
                ))}
            </div>
        );
    }

    if (!isLoading && usersList.length === 0 && !isError) {
        showUserList = <Message error={false} message="No users available " />;
    }
    return (
        <Container>
            <div className="py-24">
                <h1 className="text-center text-2xl text-primary  font-bold mb-4">
                    All Users
                </h1>
                <TableHeader />

                <div>{showUserList}</div>
            </div>
        </Container>
    );
};

export default UsersList;
