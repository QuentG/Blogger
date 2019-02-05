import React from 'react'
import { Link } from "react-router-dom"

const Post = (props) => 
    // Add article id 
    <Link className="article" to={"/post/"+props.id}>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
    </Link>

export default Post