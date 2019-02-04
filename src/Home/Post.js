import React from 'react'
import { Link } from "react-router-dom"

const Post = (props) => 
    <Link className="article" to="/post">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
    </Link>

export default Post