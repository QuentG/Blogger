import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"

import Header from './Includes/Header'

import HomePage from './Home/HomePage'
import PostPage from './Post/PostPage'

const Routes = () => (
    <Router>
        <div>
            <Header/>
            <Route exact path="/" component={HomePage}/>
            <Route path="/post/:id" component={PostPage}/>
        </div>
    </Router>
)



export default Routes

