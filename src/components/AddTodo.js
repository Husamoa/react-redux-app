import React from "react";
import {connect} from "react-redux";
import {addTodo} from "../redux/actions";
import {Button, TextField, Grid, FormControl, Container} from '@material-ui/core'
import Utils from "../app/Utils";

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
            <div className={Utils.getClassName('AddTodo')}>
                <Container>
                    <Grid container>
                    <Grid item xs={10}>
                        <FormControl fullWidth>
                            <TextField id="outlined-basic" label="Do zrobienia" variant="outlined"
                                       onChange={e => this.updateInput(e.target.value)}
                                       value={this.state.input}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={2} style={{display: 'flex'}}>
                        <Button variant="contained" className="add-todo" onClick={this.handleAddTodo}>
                            Dodaj do listy
                        </Button>
                    </Grid>
                    </Grid>
                </Container>
            </div>
        );
    }
}

export default connect(
    null,
    {addTodo}
)(AddTodo);
// export default AddTodo;
