import React from 'react'
import ReactDOM from 'react-dom'
import HomePage from './HomePage'
import PostPage from './PostPage'

const App = () => (
    <div>
        <HomePage/>
        <PostPage/>
    </div>
)

// Attacher mon appli à l'élément root
// Chaque component est une balise orpheline
ReactDOM.render(<App/>, document.getElementById('root'))
