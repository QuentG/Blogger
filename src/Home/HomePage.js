import React, { Component } from 'react'

import Post from './Post'
import Loader from '../Includes/Loader'

class HomePage extends Component {
    constructor() {
        super()
        this.state = {
            posts: []
        }
    }

    // Dès que le component est bien monté
    componentDidMount(){
        
        // Récupération des posts
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((response) => setTimeout(() => this.setState({posts: response}), 2000))
    }

    render(){
        
        let posts = this.state.posts.map((element, key) =>
            <Post key={key} id={element.id} title={element.title} description={element.body}/>
        )

        return (
            <div>
                <div className="container articles-container">
                    {(posts.length === 0) ? <Loader/> : posts}
                </div>
            </div>
        )
    }
}

// On export 
export default HomePage