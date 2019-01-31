import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from './HomePage/HomePage'
import PostPage from './PostPage/PostPage'

const Routes = () => (
    <Router>
        <div>
            <Route exact path="/" component={HomePage}/>
            <Route path="/post" component={PostPage}/>
        </div>
    </Router>
)

export default Routes

