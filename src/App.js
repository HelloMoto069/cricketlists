import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import Header from './components/Header';
import Main from './components/Main';
import "./components/i18n";


function App() {
  const { t, i18n } = useTranslation();
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Main/>
    </BrowserRouter>
    </>
  );
}

export default App;
