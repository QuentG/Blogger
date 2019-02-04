import React, { Component } from 'react'
import { Link } from "react-router-dom"
import Post from './Post'

class HomePage extends Component {
    constructor() {
        super()
        this.state = {posts: [
            {titre: 'title', description: 'desc'},
                {titre: 'titole', description: 'descc'},
                    {titre: 'titlje', description: 'desccc'}
        ]}
    }
    render(){
        let posts = this.state.posts.map((element, key) =>
            <Post key={key} titre={element.titre} description={element.description}/>
        )

        return (
            <div>
                <h5>Home Page</h5>
                {posts}
                <Link to="/post">Page post</Link>
            </div>
        )
    }
}

// On export 
export default HomePage