
import  { useEffect, useState } from "react";
import getData from './fetchData'; 
const TempData=()=>{
     

       const [allData,setallData]=useState([]);

  useEffect(() => {
        const {data}=getData();    
         setallData(data); 
      },[])
    
      return {allData};
}

export default TempData;
   
