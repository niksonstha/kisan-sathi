
import 'antd/dist/antd.css'

import {Modal } from "antd";
import {db} from '../Config/Firebase';
  import { collection, addDoc } from "firebase/firestore"; 
import { doc, getDoc } from "firebase/firestore";
import { useParams } from 'react-router-dom';
import { useState,useEffect } from "react";
import React from "react";
import styled from "styled-components";
// import { loadStripe } from "@stripe/stripe-js";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Container = styled.div`
  padding:0%;
  margin: 0%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.7),
      rgba(80, 45, 45, 0.3)
    ),
    url('https://img.krishijagran.com/media/54152/1601348576farmer.png');
    /* url("https://images.pexels.com/photos/114979/pexels-photo-114979.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"); */
  background-size: cover;
  background-position: center;
`;

const Wrapper = styled.div`
    ${'' /* height: 75%; */}
    width:40%;
    background-color: white;
    padding: 50px 60px;
    border-radius: 10px;
`;

const Title = styled.h1`
   fontSize:20px;
     color: rgb(77, 1, 77);
    text-align: center;
`;




const BButton = styled.button`
    ${'' /* width: 80%;
    height: 50px;
    padding: 10px; */}
     width:'50%';
    border: none;
    height:"30px";
    background-color: rebeccapurple;
    color: white;
       margin-left:20px;
           font-size: 14px;
    cursor: pointer;
       margin-top: 35px;
    ${'' /* border-radius: 5px;
    font-weight: bold;

 
 
    margin-bottom: 30px; */}
`;


const Input=styled.input`
     ${'' /* border:none; */}
    height:0px;
   padding:20px

`;



  
const Checkout=()=>{


   const {idd}=useParams();
   console.log(idd);
  // console.log(idd);
      let arr=[];
        const [billChargeModal, setBillChargeModal] = useState(false);
      const [data,setData]=useState({})

 
          useEffect(() => {

          // data=null;  
         const fetchData= async () => {
        try{
             const docRef = doc(db, "users", idd);
             const docSnap = await getDoc(docRef);

              arr.push(docSnap.data())
          
                 
               setData(docSnap.data());
            //  } else {
             
                // console.log("No such document!");
            // }   
          }catch(err){
              console.log(err)
            }
       }

        fetchData();
      },[])


         const name=data.displayName;
        const Description= data.Description;
        const price=data.Price;
      

        const product={
            name:name,
            Description:Description,
            price:price
        }
    
      const [formData,setFormdata]=useState({})
    
       const handleInput = (e) => {
       const id = e.target.id;
       const value = e.target.value;

    setFormdata({ ...formData, [id]: value });
    // console.log(formData);


  
  };
  
   const addDetails=async()=>{
     setBillChargeModal(true);
     const docRef = await addDoc(collection(db, "orders"), {
          formData
       });
     console.log("Document written with ID: ", docRef.id);
   }
     
   async function handleToken(token, addresses) {
    const response = await axios.post(process.env.REACT_APP_BACKEND_URL+"/checkout",{ token, product });
    const { status } = response.data;
    console.log("Response:", response.data);
    if (status === "success") {
      toast("Success! Check email for details", { type: "success" });
    } else {
      toast("Something went wrong", { type: "error" });
    }
  }
    
      return(
  
    
    <Container>
      
       <Wrapper>
           <Title style={{marginBottom:'0px'}}>Check Out Form</Title>
            <div style={{margin:'10px'}} className='Form-inputs'>
               <label >Full Name</label>
              <Input onChange={handleInput}  id='name' placeholder='Full Name' ></Input>

              <label style={{paddingTop:'10px'}}>Address</label>
             <Input  onChange={handleInput} id='add' placeholder='Address'></Input>

            
               <label  style={{paddingTop:'10px'}}>Pincode</label>
               <Input  onChange={handleInput} id='pin' placeholder='Pincode'></Input>



             <label style={{paddingTop:'10px'}}>No of days </label>
            <Input   onChange={handleInput} id='days' placeholder='Number of days you want to rent the equipment'></Input>
            {/* {`/equipments/${id}`} */}
            
            <div style=
              {{
                  paddingTop:'10px',
                  display:'flex',
                  paddingRight:'80px'
                  
                
                  
               }}>
                 {
                  formData.days>0  ?  
                   <BButton
                    style={{
                        width:'60%',
                    }}
                    >{`$${price*formData.days}`}
                  
                     </BButton>
                     
                   :  
                    
                      <BButton
                    style={{
                        width:'60%',
                    }}
                    >{`$${price}`}
                  
                     </BButton>
            

                 }
            {formData.name && formData.add && formData.pin && formData.days  &&  <BButton  onClick={addDetails}>Check out</BButton>}

            </div>
      
        
         </div>
               
       </Wrapper>


        <Modal
        style={{width:'80px',}}
        title="Charge Bill"
        visible={billChargeModal}
        footer={false}
        onCancel={() => setBillChargeModal(false)}
      >
        {" "}
        
      <h3 style={{
        fontFamily:' "Source Sans Pro", sans-serif',
            color: '#000d6b',
          fontWeight: '600',
    
      }}>
           Please Click on button below !!
      </h3>


   
       <StripeCheckout
        stripeKey="pk_test_4TbuO6qAW2XPuce1Q6ywrGP200NrDZ2233"
         token={handleToken}
        amount={product.price * 100}
        name="Tesla Roadster"
        billingAddress
        shippingAddress
        onClick={()=>setBillChargeModal(false)}
      />

      
        <BButton onClick={()=>setBillChargeModal(false)}> Close</BButton>
     

     
         {" "}
      </Modal>
               
    </Container>
)
}

export default Checkout;