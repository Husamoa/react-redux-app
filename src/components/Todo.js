import React from "react";
import { connect } from "react-redux";
import cx from "classnames";
import { toggleTodo } from "../redux/actions";
import {Container, Divider, List, ListItemText} from "@material-ui/core";

const Todo = ({ todo, toggleTodo }) => (
    <Container>
    <List className="todo-item" onClick={() => toggleTodo(todo.id)}>
        <ListItemText
            className={cx(
                "todo-item__text",
                todo && todo.completed && "todo-item__text--completed"
            )}
        >
            {todo && todo.completed ? "👌" : "👋"}{" "}
            {todo.content}
    </ListItemText>
        <Divider />
    </List>
    </Container>
);

// export default Todo;
export default connect(
    null,
    { toggleTodo }
)(Todo);
