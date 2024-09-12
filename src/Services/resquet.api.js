import http from "./http.commun";

export const  ServicesResqueteAPI = {

   // ========Authentification ============//
   getUser(id) {
      return http.get(`/users/${id}`);
   },

   createUser(data) {
      return http.post("/users", data);
   },

   updateUser(data, id) {
      return http.put(`/users/${id}`, data);
   },

   login(data) {
      return http.post("/auth/login", data);
   },

   resetPassword(data) {
      return http.post("/auth/request_password_reset", data);
   },

   updatePassword(data, token) {
      return http.post(`/auth/reset_password/${token}`, data);
   },

   // ========Other resquete api ============//
   

}
