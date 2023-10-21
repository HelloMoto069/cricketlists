import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";


function Header() {
  const { t } = useTranslation();
  return (
    <>
    <header>
        <nav style={{margin: 17}}>
            <Link to="/" style={{ padding: 17}}>
            
            {t('Home')}
            </Link>

            <Link to="/CricketPlayerList" style={{ padding: 17}}>
            Cricket Player List
            </Link>
        </nav>
    </header>
    </>
  )
}

export default Header;