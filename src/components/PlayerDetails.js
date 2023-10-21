import React from 'react';
import players from "./players"
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";


function PlayerDetails() {

  const { t } = useTranslation();


    const {slug} = useParams();
    const playerList = players[slug];
    const {name, details} = playerList;

 if (!playerList) {
    return (<>
    <div> Data don't exist</div>
    </>)
 }
 return (
    <>
    <div>
        <h1>{t(name)}</h1>
        <h5>{details}</h5>
        <Link to="/CricketPlayerList">Back</Link>
    </div>
    </>
 )
}

export default PlayerDetails;