import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import CricketPlayerList from './CricketPlayerList';
import PlayerList from './PlayerList';
import PlayerDetails from './PlayerDetails';

function Main() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CricketPlayerList" element={<CricketPlayerList />} >
            <Route index element={<PlayerList />} />
            <Route path=":slug" element={<PlayerDetails />} />
        </Route>
    </Routes>
    </>
  )
}

export default Main;