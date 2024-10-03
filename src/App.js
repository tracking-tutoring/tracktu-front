import logo from './logo.svg';
import './App.css';
import Auth from './Pages/Auths/Auth';
import { Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Admin from './Pages/Admin/Admin';
import TuteurPlateform from './Pages/TuteurPlateform/TuteurPlateform';

function App() {

  return (
    <div>
      <Routes>
        {/* Ajout des routes d'authentification */}

        {Auth()}

        {/* =======SuperAdmin route======== */}
        {Admin()}

        {/* =======SuperAdmin route======== */}
        {TuteurPlateform()}
      </Routes>
    </div>
  );
}

export default App;
