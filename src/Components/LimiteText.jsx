import React, { useEffect, useState } from 'react'



const LimiteText = ({ text, maxLength }) => {

   const [truncated, setTruncated] = useState(text);

   useEffect(() => {
      if (text.length > maxLength) {
         setTruncated(text.substring(0, maxLength) + '...');
      } else {
         setTruncated(text);
      }
   }, [text, maxLength]);

   return <p>{truncated}</p>;
}

export default LimiteText
