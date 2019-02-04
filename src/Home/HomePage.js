import React, { Component } from 'react'
import { Link } from "react-router-dom"
import Post from './Post'

class HomePage extends Component {
    constructor() {
        super()
        this.state = {posts: [
            {title: 'title', description: 'desc'},
                {title: 'titole', description: 'descc'},
                    {title: 'titlje', description: 'desccc'}
        ]}
    }
    render(){
        let posts = this.state.posts.map((element, key) =>
            <Post key={key} title={element.title} description={element.description}/>
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