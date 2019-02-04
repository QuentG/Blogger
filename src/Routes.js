import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"

import HomePage from './Home/HomePage'
import PostPage from './Post/PostPage'
import Header from './Includes/Header'

const Routes = () => (
    <Router>
        <div>
            <Header/>
            <Route exact path="/" component={HomePage}/>
            <Route path="/post" component={PostPage}/>
        </div>
    </Router>
)

export default Routes

