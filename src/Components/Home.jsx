import React from 'react';
import {
    Route,
    BrowserRouter as Router,
    Switch,
    Redirect,
} from "react-router-dom";
import { auth } from '../services/firebase';

function Home() {
    return (
        <div>
            Hello World!
        </div>
    )
}

export default Home
