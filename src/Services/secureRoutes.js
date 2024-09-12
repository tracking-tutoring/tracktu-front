import { converDateNumb } from "./convDateNumb";

export const isAuthenticate = () => {

   let isExpired = false
   const authInfoString = window.sessionStorage.getItem('authInfo');

   if (authInfoString !== null && authInfoString !== undefined && authInfoString !== '') {

      const authInfo = JSON.parse(authInfoString);

      if (authInfo.token !== null || authInfo.token !== undefined || authInfo.token !== '' || authInfo.token !== 'null') {
         var dateNow = Math.floor(Date.now() / 1000);
         const dateEpx = converDateNumb(authInfo.exp)

         if (dateEpx < dateNow) {
            isExpired = true
            return isExpired
         } else {
            return isExpired
         }
      } else {
         isExpired = true
         return isExpired
      }
   } else {
      isExpired = true
      return isExpired
   }

}
