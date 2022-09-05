import {useState,useEffect} from 'react';
import { collection, query, getDocs } from "firebase/firestore";
import {db} from '../../Config/Firebase'
const UserData=()=>{
       
    const [data,setData]=useState([]);
  
 
    useEffect(()=>{
         const fetchData= async () => {
           let list=[];
            try{
                  const q = query(collection(db, "users"));
                  const querySnapshot = await getDocs(q);
                  querySnapshot.forEach((doc) => {
                      list.push({id:doc.id,...doc.data()});
               
                  });
                  setData(list);
                  console.log(list);
            }catch(err){
              console.log(err);
            }
       }

        fetchData();
      },[])

       console.log(data[0]);
     
    }

export default UserData;