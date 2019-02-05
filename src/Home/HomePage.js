import React, { Component } from 'react'

import Post from './Post'

class HomePage extends Component {
    constructor() {
        super()
        this.state = {posts: []}
    }

    // Dès que le component est bien monté
    componentDidMount(){
        
        // Récupération des posts
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((response) => this.setState({
                posts: response
            }))
    }

    render(){
        
        let posts = this.state.posts.map((element, key) =>
            <Post key={key} id={element.id} title={element.title} description={element.body}/>
        )

        return (
            <div>
                <div className="container articles-container">
                    { posts }
                </div>
            </div>
        )
    }
}

// On export 
export default HomePage