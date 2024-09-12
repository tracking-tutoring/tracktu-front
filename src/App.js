import logo from './logo.svg';
import './App.css';
import Auth from './Pages/Auths/Auth';
import { Routes } from 'react-router-dom';
import Admin from './Pages/Admin/Admin';

function App() {
  return (
    <div>
      <Routes>
        {/* Ajout des routes d'authentification */}
        {Auth()}

        {/* =======SuperAdmin route======== */}
        {Admin()}
      </Routes>
    </div>
  );
}

export default App;
