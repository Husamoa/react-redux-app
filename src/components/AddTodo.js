import React from "react";
import {connect} from "react-redux";
import {addTodo} from "../redux/actions";
import {Button, TextField, Container} from '@material-ui/core'

class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {input: ""};
    }

    updateInput = input => {
        this.setState({input});
    };

    handleAddTodo = () => {
        this.props.addTodo(this.state.input);
        this.setState({input: ""});
    };

    render() {
        return (
            <div>
                <TextField id="outlined-basic" label="Do zrobienia" variant="outlined"
                    onChange={e => this.updateInput(e.target.value)}
                    value={this.state.input}
                />
                <Button variant="contained" className="add-todo" onClick={this.handleAddTodo}>
                    Dodaj do listy
                </Button>
            </div>
        );
    }
}

export default connect(
    null,
    {addTodo}
)(AddTodo);
// export default AddTodo;
