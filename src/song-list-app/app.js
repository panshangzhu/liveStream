import React from "react";
import SongList from "../components/song-list/SongList";
import SongDetail from "../components/song-list/SongDetail";
import {BrowserRouter, HashRouter, Link, Route} from "react-router-dom";

const PageOne = () => {
    return <div>
        Page One
        <Link to='/pagetwo'>Two</Link>
    </div>
}

const PageTwo = () => {

    return <div>
        <Link to='/'>One</Link>
        Page Two
    </div>
}


const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={PageOne}></Route>
                    <Route path="/pagetwo" component={PageTwo}></Route>
                </div>
            </BrowserRouter>
            <div>
                <SongList></SongList>
            </div>
            <div>
                <SongDetail></SongDetail>
            </div>
        </div>
    )
}


export default App
