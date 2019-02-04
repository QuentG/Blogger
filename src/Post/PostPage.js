import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Comment from './Comment'
import ProfileImage from '../Images/profile.png'

class PostPage extends Component {
    constructor() {
        super()
        this.state = {
            post: {title: 'Mon post', description: 'Ma description'}, 
            comments: [
                {
                    email: 'example@example.com', 
                    content: 'Mon commentaire'
                },
                {
                    email: 'example@example.fr', 
                    content: 'Mon commentaire 2'
                },
                {
                    email: 'example@example.azbr', 
                    content: 'Mon commentaire 3'
                }
            ]
        }
    }
    render(){
        
        let comments = this.state.comments.map((element, key) =>
            <Comment key={key} email={element.email} comment={element.comment} src={ProfileImage}/>
        )

        return (
            <div className="container post container">
                <div className="post">
                    <h2>{this.state.post.title}</h2>
                    <p>{this.state.post.description}</p>
                </div>
                <div className="comments-container">
                    <h2 className="comments-title">Commentaires</h2>
                        { comments } 
                </div>
            </div>
        )
    }
}

// On export 
export default PostPage