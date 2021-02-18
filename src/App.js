import React, {useState, useEffect} from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import VisibilityFilters from "./components/VisibilityFilters";
import {Grid} from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import "./styles/App.scss";
import Utils from "./app/Utils";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        textAlign: "center"
    },
}));

export default function App() {
    const classes = useStyles();
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res =>  setData(res));

    }, []);

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
                    <TodoList data={data}/>
                </Grid>
                <Grid item xs={12}>
                    <VisibilityFilters/>
                </Grid>
            </Grid>
        </div>
    );
}

