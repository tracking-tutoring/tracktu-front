import http from "./http.commun";

export const ServicesResqueteAPI = {

   // ========Authentification ============//


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

   // ======== resquete user with UserRole ============//

   createUsers(data) {
      return http.post(`/tracking/users`, data);
   },

   getUsers(userRole) {
      return http.get(`/tracking/users/${userRole}`);
   },

   deleteUsers(userId) {
      return http.delete(`/tracking/users/${userId}`);
   },

   getUser(userRole, userId) {
      return http.get(`/tracking/users/${userRole}/${userId}`);
   },

   updateUser(userRole, userId, data) {
      return http.post(`/tracking/users/${userRole}/${userId}`, data);
   },


   // ======== resquete Modules ============//

   getModules() {
      return http.get(`/tracking/modules`);
   },

   // ======== resquete Seances ============//

   getSeances() {
      return http.get(`/tracking/sessions`);
   },

   // ======== resquete groupes ============//

   createGroupes(data) {
      return http.post(`/tracking/groups`, data);
   },

   getGroupes() {
      return http.get(`/tracking/groups`);
   },

   getGroupe(groupId) {
      return http.get(`/tracking/groups/${groupId}`);
   },

   deleteGroupe(groupId) {
      return http.get(`/tracking/groups/${groupId}`);
   },

   updateGroupe(groupId, data) {
      return http.put(`/tracking/groups/${groupId}`, data);
   },


   // ======== resquete affectations ============//

   createAffectations(data) {
      return http.post(`/tracking/affectations/groups`, data);
   },

   getAffectations() {
      return http.get(`/tracking/affectations`);
   },

   getAffectation(groupId) {
      return http.get(`/tracking/affectations/${groupId}`);
   },

   deleteAffectation(groupId) {
      return http.get(`/tracking/affectations/${groupId}`);
   },

   updateAffectation(groupId, data) {
      return http.put(`/tracking/affectations/${groupId}`, data);
   },

   // api/v1/tracking/affectations/groups .......................................................... Api\V1\AffectationController@store
   // DELETE    api/v1/tracking/affectations/groups ........................................................ Api\V1\AffectationController@destroy
   // POST      api/v1/tracking/affectations/groups/link-students ............................... Api\V1\AffectationController@linkStudentsGroups
   // POST      api/v1/tracking/affectations/tutor ..................................................... Api\V1\AffectationController@assignTutor
   // DELETE    api/v1/tracking/affectations/tutor

   // ======== resquete affectations ============//

   createModules(data) {
      return http.post(`/tracking/modules`, data);
   },

   getModules() {
      return http.get(`/tracking/modules`);
   },

   getModule(moduleId) {
      return http.get(`/tracking/modules/${moduleId}`);
   },

   deleteModule(moduleId) {
      return http.delete(`/tracking/modules/${moduleId}`);
   },

   updateModule(moduleId, data) {
      return http.put(`/tracking/modules/${moduleId}`, data);
   },

}
