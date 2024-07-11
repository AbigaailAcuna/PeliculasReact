import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Movies from '../pages/Movies';

const MyRoutes = () =>{

    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<Movies/>}/>
            </Routes>
        </Router>
    )
}

export default MyRoutes;
