import React from 'react'
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
// import { deleteRecipeAPI, saveHistoryAPI } from './services/allAPI';
import { deleteRecipeAPI,saveHistoryAPI } from '../Services/allAPI';

function RecipeCard({displayData,setRealodAfterDelete}) {

    const navigate = useNavigate();

    const handleNavigate = async() => {
      let timeData = new Date()
      let timeStamp = new Intl.DateTimeFormat('en-US',{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(timeData)
      console.log(timeStamp);
      const{recipeName,youtubeLink}=displayData
      await saveHistoryAPI({recipeName,youtubeLink,timeStamp})
      navigate("/recipe",{state:displayData});
    };

    const removeRecipe = async(rId) =>{
      const result= await deleteRecipeAPI(rId)
      setRealodAfterDelete(result.data)
      console.log(rId);
    }

    const dragStarted=(e,rId)=>{
      e.dataTransfer.setData("recipeId",rId)
      console.log(rId);
    }
    
  return (
    <>
    <Card draggable onDragStart={(e)=>dragStarted(e,displayData?.id)} className='border crd'>
      <Card.Img className='p-2 pop' onClick={handleNavigate} style={{height:"300px",width:'100%'}} variant="top" src={displayData?.imageURL} />
      <Card.Body>
        <div className='d-flex justify-content-between'>
        <Card.Title className='fw-bolder'>{displayData?.recipeName}</Card.Title>
        <button onClick={()=>removeRecipe(displayData?.id)} className="btn btn-danger">Delete</button>
        </div>    
      </Card.Body>
    </Card>
    </>
  )
}

export default RecipeCard