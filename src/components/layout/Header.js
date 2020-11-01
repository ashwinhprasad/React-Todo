import React from 'react';
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header style={headerStyle}>
            <h1>Todo App</h1>
            <p style={{'color':'white'}}>
                <Link style={linkStyle} to="/" >
                    Home
                </Link>
                {' | '}
                <Link style={linkStyle} to="/about" >
                    About
                </Link>
            </p>
        </header>
    );
}

const linkStyle = {
    'color':'white',
    'textDecoration':'none',
    'font-family' : "'Roboto', sans-serif"
}



const headerStyle = {
    'backgroundColor':'black',
    'margin':'0px',
    'color':'white',
    'textAlign':'center',
    'padding':'2px'
}

export default Header;