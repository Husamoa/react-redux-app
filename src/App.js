import React from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import VisibilityFilters from "./components/VisibilityFilters";
import {Container, Grid} from "@material-ui/core";
import "./styles/App.scss";

export default function App() {
    return (
        <Container className="todo-app">
            <Grid alignContent="center">
            <h1>Todo List</h1>
            <AddTodo />
            <TodoList />
            <VisibilityFilters />
            </Grid>
        </Container>
    );
}

