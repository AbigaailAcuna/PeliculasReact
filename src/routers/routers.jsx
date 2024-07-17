import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Movies from '../pages/Movies';
import Movie from '../pages/Movie';

const MyRoutes = () =>{

    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<Movies/>}/>
                <Route exact path="/movie/:movieid" element={<Movie/>}/>
            </Routes>
        </Router>
    )
}

export default MyRoutes;
