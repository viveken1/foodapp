import React, { useState } from "react";
import { Button, FloatingLabel, Form, Modal } from "react-bootstrap";
// import { uploadRecipeAPI } from "./services/allAPI";
import { useNavigate } from "react-router-dom";
import { uploadRecipeAPI } from "../Services/allAPI";

function Add({setReloadView}) {

  const [uploadRecipe,setUploadReceipe] = useState({
    recipeName:"",imageURL:"",discription:"",youtubeLink:""
  })
  const [show, setShow] = useState(false);

  const handleClose = () =>{
    setShow(false);
    setUploadReceipe({...uploadRecipe,recipeName:"",imageURL:"",discription:"",youtubeLink:""})
  } 
  const handleShow = () => setShow(true);

  const getYoutubeEmbedLink = (link) =>{
    if(link.includes("v=")){
      let videoId = link.split("v=")[1].slice(0,11)
      setUploadReceipe({...uploadRecipe,youtubeLink:`https://www.youtube.com/embed/${videoId}`})
    }
    else{
      setUploadReceipe({...uploadRecipe,youtubeLink:""})
      alert("Please input a valid link")
    }
  }

  const navigate= useNavigate();
  const handleNavigate = () => {
    navigate("/history");
  };

  const handleUpload=async()=>{
    const{recipeName,imageURL,discription,youtubeLink}=uploadRecipe
    if(recipeName && imageURL && discription && youtubeLink){
      const result= await uploadRecipeAPI(uploadRecipe)
      if(result.status>=200 && result.status<300){
        alert(`${result.data.recipeName} recipe uploaded successfully!!!`)
        setReloadView(result.data)
        handleClose()
      }
      else{
        alert("API call failed... Please try again after sometimes")
      }
    }
    else{
      alert("Please fill the form completely")
    }
  }

  return (
    <>
      <div className="d-flex justify-content-between my-3">
        <h2 className="mt-2">All Foods</h2>
        <div>
          <button onClick={handleShow} className="btn btn-success my-3 me-3">
            Add foods
          </button>
          <button onClick={handleNavigate} className="btn btn-info my-3">
            fresh Items
          </button>
        </div>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Recipe</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the following details</p>
          <div className="border rounded border-secondary p-3">
            <FloatingLabel
              controlId="floatingInputReceipe"
              label="Recipe Name"
              className="mb-3"
            >
              <Form.Control
              value={uploadRecipe.recipeName}
              onChange={(e)=>setUploadReceipe({...uploadRecipe,recipeName:e.target.value})}
                type="text"
                placeholder="Recipe Name"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInputImage"
              label="Image URL"
              className="mb-3"
            >
              <Form.Control
              value={uploadRecipe.imageURL}
              onChange={(e)=>setUploadReceipe({...uploadRecipe,imageURL:e.target.value})}
                type="text"
                placeholder="Image URL"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInputDiscription"
              label="Recipe Discription"
              className="mb-3"
            >
              <Form.Control
                value={uploadRecipe.discription}
                onChange={(e)=>setUploadReceipe({...uploadRecipe,discription:e.target.value})}
                type="text"
                placeholder="Recipe Discription"
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInputYtlink"
              label="Youtube Link"
              className="mb-3"
            >
              <Form.Control
                value={uploadRecipe.youtubeLink}
                onChange={(e)=>getYoutubeEmbedLink(e.target.value)}
                type="text"
                placeholder="Youtube Link"
              />
            </FloatingLabel>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleUpload} variant="primary">Upload</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Add;