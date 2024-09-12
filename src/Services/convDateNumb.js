export const converDateNumb = (date)=>{

   const parts = date.split(/[- :]/); // Diviser la chaîne en parties (mois, jour, année, heure, minute)
   const month = parseInt(parts[0], 10) - 1; // Mois (0-11)
   const day = parseInt(parts[1], 10);
   const year = parseInt(parts[2], 10);
   const hour = parseInt(parts[3], 10);
   const minute = parseInt(parts[4], 10);

   const timestamp = new Date(year, month, day, hour, minute).getTime() / 1000; // Divisé par 1000 pour obtenir des secondes

   return timestamp

}
