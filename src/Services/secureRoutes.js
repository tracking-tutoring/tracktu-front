import { converDateNumb } from "./convDateNumb";

export const isAuthenticateAdmin = (typeUser) => {

   let isExpired = false
   const authInfoString = window.sessionStorage.getItem('authInfo');
   const userInfoString = window.sessionStorage.getItem('userInfos');

   if (
      //S'assurer que les données existes
      authInfoString !== null && authInfoString !== undefined && authInfoString !== '' &&
      userInfoString !== null && userInfoString !== undefined && userInfoString !== ''
   ) {

      const authInfo = JSON.parse(authInfoString);

      if (userInfoString.role === typeUser || authInfo.token !== null || authInfo.token !== undefined || authInfo.token !== '' || authInfo.token !== 'null') {
         // var dateNow = Math.floor(Date.now() / 1000);
         // const dateEpx = converDateNumb(authInfo.exp)

         // if (dateEpx < dateNow) {
         //    isExpired = true
         //    return isExpired
         // } else {
         // }
         return isExpired
      } else {
         isExpired = true
         return isExpired
      }
   } else {
      isExpired = true
      console.log(isExpired)
      return isExpired
   }

}
