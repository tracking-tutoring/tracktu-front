import axios from "axios";

//=== Créez une instance Axios ===//
const instance = axios.create({
  baseURL: "http://localhost:8000/api/v1",
});

//=== Ajoutez un interceptor pour chaque requête sortante ===//
instance.interceptors.request.use((config) => {

  //=== Récupérez les données depuis sessionStorage ===//
  const authInfo = JSON.parse(sessionStorage.getItem('authInfo') || '{}');
  const user = JSON.parse(sessionStorage.getItem('userInfos') || '{}');

  //=== Ajoutez les données dans les en-têtes de la requête si elles existent ===//
  if (authInfo.token) {
    config.headers.Authorization = `Bearer ${authInfo.token}`;
  }
  if (user.id) {
    config.headers.UserId = user.id;
  }

  //=== Définir l'en-tête Content-Type en fonction du type de données ===//
  if (config.data instanceof FormData) {
    // Axios gère automatiquement le Content-Type pour les requêtes multipart/form-data
    delete config.headers['Content-Type'];  // Supprimer pour que axios le gère
  } else {
    // Si ce n'est pas un FormData, utiliser application/json
    config.headers['Content-Type'] = 'application/json';
  }

  return config;
}, (error) => {
  return Promise.reject(error);
});

export default instance;
