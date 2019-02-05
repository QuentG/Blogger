import React, { Component } from 'react'

import Comment from './Comment'
import ProfileImage from '../Images/profile.png'

class PostPage extends Component {
    constructor() {
        super()
        this.state = {
            post: {}, 
            comments: []
        }
    }

    // Dès que le component est bien monté
    componentDidMount() {

        // Add post id
        let id = this.props.match.params.id

        // Récupération d'un post 
        fetch('https://jsonplaceholder.typicode.com/posts/'+id)
            .then((response) => response.json())
            .then((response) => this.setState({
                post: response
            }))

        // Récupération des commentaires
        fetch('https://jsonplaceholder.typicode.com/posts/'+id+'/comments')
        .then((response) => response.json())
        .then((response) => this.setState({
            comments: response
        }))
    }

    render(){
        
        let comments = this.state.comments.map((element, key) =>
            <Comment key={key} email={element.email} comment={element.body} src={ProfileImage}/>
        )

        return (
            <div className="container post container">
                <div className="post">
                    <h2>{this.state.post.title}</h2>
                    <p>{this.state.post.body}</p>
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