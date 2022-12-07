import React from 'react';
import UserList from "./components/UserList";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";
import PostForm from "./components/PostForm";

const App = () => {
    return (
        <div>
            <UserList/>
            <hr/>
            <TodoFilter/>
            <TodoList/>
            <PostForm/>
        </div>
    );
};

export default App;