import React, {useState, useEffect} from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import VisibilityFilters from "./components/VisibilityFilters";
import {Grid} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import "./styles/App.scss";
import {useFetch} from "./app/DataAPI.js"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        textAlign: "center"
    },
}));

export default function App() {
    const classes = useStyles();

    const query = 'testAPI'
    const {status, data} = useFetch(query)

    return (
        <div className={classes.root}>
            <Grid container className="todo-app">
                <Grid item xs={12}>
                    <h1>Todo List</h1>
                </Grid>
                <Grid item xs={12}>
                    <AddTodo/>
                </Grid>
                <Grid item xs={12}>
                    <TodoList/>
                </Grid>
                <Grid item xs={12}>
                    <VisibilityFilters/>
                </Grid>
            </Grid>
        </div>
    );
}

