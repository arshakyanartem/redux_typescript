import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {fetchUsers} from "../store/action-creators/user";

const UserList: React.FC = () => {
    const {users, loading, error} = useTypedSelector(state => state.userReducer)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUsers())
    }, [])


    if (loading) {
        return <h1>Loading...</h1>
            }
    if (error) {
        return <h1>You have an error!</h1>
    }
    return (
        <div>
            {
                users.map(item =>
                    <div key={item.id}>{item.name}</div>
                )
            }
        </div>
    );
};

export default UserList;