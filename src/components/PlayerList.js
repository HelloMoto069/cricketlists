import React from 'react';
import players from './players';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";



function PlayerList() {
  const { t } = useTranslation();

  return (
    <>
    <ul>
        {
            Object.entries(players).map(([slug, {name}]) => (
                <>
                <li key={slug}>
                    <Link to={`/CricketPlayerList/${slug}`}>
                        <h3>{t(name)}</h3>
                    </Link>
                </li>
                </>
            ))
        }
    </ul>
    </>
  )
}

export default PlayerList;