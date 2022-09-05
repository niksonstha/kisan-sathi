import '../styles/becomeDriver.css'
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from 'react';
import swal from 'sweetalert';
import {  useNavigate } from 'react-router';
const New = ({ inputs }) => {


  const [file, setFile] = useState("");
  const [data, setData] = useState(null);

  
  const Navigate=useNavigate();



    const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setData({ ...data, [id]: value });
    console.log(data);
  };

  const handleAdd = (e) => {
     e.preventDefault();
      if(data!=null){
          swal({
                     title: "Success !!",
                     text:"Succesfully submitted your Application..We'll reach you out soon !!",
                     icon: "success",
                     button: "Close!",
                      });
        Navigate('/');
      }
    else {
        swal({
                     title: "Oops !!",
                     text:"Something went wrong please try again later !!",
                     icon: "error",
                     button: "Close!",
                      });
    }

  };


  return (
    <div className="new">
  
      <div className="newContainer">
   
        <div className="top">
          <h1 style={{color:"#000d6b"}}>Joins Us</h1>
        </div>
        <div className="bottom">
          <div className="left">
           <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form onSubmit={handleAdd} >
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    id={input.id}
                    type={input.type}
                    placeholder={input.placeholder}
                    onChange={handleInput}
                  />
                </div>
              ))}
            
            <button style={{color:'white'}} type="submit">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;