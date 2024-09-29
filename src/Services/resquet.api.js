import http from "./http.commun";

export const  ServicesResqueteAPI = {

   // ========Authentification ============//
   getUser(id) {
      return http.get(`/users/${id}`);
   },

   createUser(data) {
      return http.post("/register", data);
   },

   updateUser(data, id) {
      return http.put(`/users/${id}`, data);
   },

   login(data) {
      return http.post("/login", data);
   },

   logout(data) {
      return http.post("/logout", data);
   },


   resetPassword(data) {
      return http.post("/forgot-password", data);
   },

   checkCode(data) {
      return http.post("/check-code", data);
   },

   updatePassword(data, token) {
      return http.post(`/change-password/${token}`, data);
   },

   // ========Other resquete api ============//


}
