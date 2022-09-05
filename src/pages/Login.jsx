import React,{useState,useContext} from "react";
import styled from "styled-components";
import InputForm from './formInput'
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../Config/Firebase"
import { useNavigate } from "react-router";
// import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";
// import { message } from "antd";
import swal from "sweetalert";
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
    height: 70%;
    background-color: white;
    padding: 0px 60px;
    border-radius: 10px;
`;

const Title = styled.h1`
     color: rgb(77, 1, 77);
    text-align: center;
`;




const Button = styled.button`
    width: 100%;
    height: 50px;
    padding: 10px;
    border: none;
    background-color: rebeccapurple;
    color: white;
    border-radius: 5px;
    font-weight: bold;
    font-size: 18px;
    cursor: pointer;
    margin-top: 15px;
    margin-bottom: 30px;
`;



 const inputs=[

      {
         id :1,
         name:"email",
         type:'email',
         errorMessage:'It should be valid email Address',
         placeholder:'email',
         required:true,
         label:'email'
      },
      {
        id :2,
        name:"password",
        type:'text',
        errorMessage:"Password should 8-16 character long and include atleast 1 number,1 special character",
        placeholder:'Password',
        required:true,
        pattern:'^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@[-`{-~]).{6,64}$',
        label:'Password'

      },
    ]

const SignIn = () => {

    const Navigate=useNavigate();

    const {dispatch} =useContext(AuthContext);



      const [values,setValues]=useState({
        email:'',
        password:'',
    })



   
     const HandleSubmit=(e)=>{

         e.preventDefault();   
 
      const email=values.email;
      const password=values.password;
  

          
    
          signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
           
             const user = userCredential.user;
                   
                      dispatch({type:"LOGIN", payload:user})
             
                 swal({
                     title: "Logged In!",
                     text: "You Logged In Sucessfullyy!",
                     icon: "success",
                     button: "Close!",
                      });
             
                   Navigate('/');
                  
         
            

              })
              .catch((error) => {
                 swal({
                     title: "Oops!",
                     text: "Something went wrong!",
                     icon: "error",
                     button: "Try again!",
                      });
           });
     
  
     } 


    const handleChange=(e)=>{
         e.preventDefault();
         setValues({...values,[e.target.name]:e.target.value})
     }

  



        return (
    <Container> 

      <Wrapper>
        <Title>Login</Title>
          
    
              
           {inputs.map((input)=>(
            <InputForm
               key={input.id}
               {...input}  
               value={values[input.name]}
               onChange={handleChange}  
               />
        ))}
       
          <Button type='submit' onClick={HandleSubmit}> Submit</Button>
         {/* {error &&  <span>Wrong Email or Password !!</span> }  */}
      </Wrapper>
   
    </Container>
  );

  

}

export default SignIn;





    


    


     
  