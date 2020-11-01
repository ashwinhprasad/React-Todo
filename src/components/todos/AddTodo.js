import React, { Component } from 'react'

class AddTodo extends Component {

    state = {
        title:''
    }

    onChange = (e) => {
        this.setState({title: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({title:''});
    }

    render() {
        return (
            <form style={formStyle}>
                <input 
                    style={{
                            'width':'83%',
                            'padding':'5px',
                            'border':'none',
                            'outline':'none'
                        }
                    } 
                    value={this.state.title}
                    onChange = {this.onChange}
                    type="text" 
                    placeholder="Add Todo..." 
                />
                <button 
                type="submit"
                style = {{
                    'width':'14%',
                    'color':'white',
                    'backgroundColor':'black',
                    'border':'none',
                    'borderRadius':'5px',
                    'padding':'5px',
                    'flex':'right'
                }}
                onClick={this.onSubmit}>
                Add
                </button>
            </form>
        )
    }
}

const formStyle = {
    'marginLeft':'25%',
    'marginRight':'25%',
    'paddingTop':'5px'
}

export default AddTodo;
