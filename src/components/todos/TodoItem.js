import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {
    
    getStyle = () => {
        if (this.props.todo.completed ) {
            return {
                'background' : 'rgba(149, 124, 207,1)',
                'paddingLeft' : '10px',
                'paddingTop' : '2px',
                'paddingBottom': '2px',
                'width':'50%',
                'display':'block',
                'marginTop':'5px',
                'marginLeft':'auto',
                'marginRight':'auto',
                'borderRadius': '4px',
                'textDecoration' : 'line-through',
                "font-family":"'Teko', sans-serif"
            }
        } else {
            return {
                'background' : 'rgba(149, 124, 207,0.4)',
                'paddingLeft' : '10px',
                'paddingTop' : '2px',
                'paddingBottom': '2px',
                'marginLeft':'auto',
                'marginRight':'auto',
                'marginTop':'5px',
                'width':'50%',
                'display':'block',
                'borderRadius': '4px',
                'textDecoration' : 'none',
                "font-family":"'Teko', sans-serif"
            }
        }
    }
    

    buttonStyle = () => {
        return ({
            'borderRadius':'10px',
            'border': 'none',
            'backgroundColor' : 'red',
            'width':'20px',
            'height':'20px',
            'padding':'1px',
            'float':'right',
            'marginRight':'10px'
        })
    }

    render() {
        return (
            <div style={this.getStyle()}>    
                <p>
                <input style={{ marginRight:'20px'}} type="checkbox" onChange={this.props.markComplete.bind(this,this.props.todo.id)} /> {'  '}
                {this.props.todo.title + ' '}
                <button style={this.buttonStyle()} onClick={this.props.delete.bind(this,this.props.todo.id)}>X</button>
                </p>                
            </div>
        )
    }
}

TodoItem.propTypes = {

    todo:PropTypes.object.isRequired
  
}
  

export default TodoItem
