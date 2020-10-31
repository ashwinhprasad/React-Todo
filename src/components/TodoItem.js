import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {
    
    getStyle = () => {
        if (this.props.todo.completed ) {
            return {
                'background' : 'rgba(115, 145, 136,0.5)',
                'paddingLeft' : '10px',
                'paddingTop' : '2px',
                'paddingBottom': '2px',
                'width':'50%',
                'display':'block',
                'margin-top':'5px',
                'margin-left':'auto',
                'margin-right':'auto',
                'borderRadius': '4px',
                'textDecoration' : 'line-through',
            }
        } else {
            return {
                'background' : 'rgba(115, 145, 136,1)',
                'paddingLeft' : '10px',
                'paddingTop' : '2px',
                'paddingBottom': '2px',
                'margin-left':'auto',
                'margin-right':'auto',
                'margin-top':'5px',
                'width':'50%',
                'display':'block',
                'borderRadius': '4px',
                'textDecoration' : 'none'
            }
        }
    }
    

    buttonStyle = () => {
        return ({
            'borderRadius':'10px',
            'border':'1px black solid',
            'backgroundColor' : 'red',
            'width':'20px',
            'height':'20px',
            'padding':'1px',
            'float':'right',
            'margin-right':'10px'
        })
    }

    render() {
        return (
            <div style={this.getStyle()}>    
                <p>
                <input type="checkbox" onChange={this.props.markComplete.bind(this,this.props.todo.id)} /> {'  '}
                {this.props.todo.title + ' '}
                <button style={this.buttonStyle()} onClick={this.props.add}>X</button>
                </p>                
            </div>
        )
    }
}

TodoItem.propTypes = {

    todo:PropTypes.object.isRequired
  
}
  

export default TodoItem
