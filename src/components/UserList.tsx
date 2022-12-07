import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {fetchUsers} from "../store/action-creators/user";

const UserList = () => {
    const {users, loading, error} = useTypedSelector(state => state.userReducer)
    const dispatch = useDispatch()
    useEffect(() => {
        // @ts-ignore
        dispatch(fetchUsers())
    }, [])
    if (loading) {
        return <h2>Loading...</h2>
    }
    if (error) {
        return <h2>You have an error in fetch Users!</h2>
    }
    return (
        <div>
            {
                users.map(item =>
                    <div key={item.id}>
                        {item.name}
                    </div>
                )
            }
        </div>
    );
};

export default UserList;