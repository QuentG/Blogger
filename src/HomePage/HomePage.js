import React, { Component } from 'react'
import { Link } from "react-router-dom";

class HomePage extends Component {
    render(){
        return (<div>
            <h5>Home Page</h5>
            <Link to="/post">Page post</Link>
        </div>)
    }
}

// On export 
export default HomePage