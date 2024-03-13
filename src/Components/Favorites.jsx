import React, { useEffect, useState } from 'react'
// import { addFavoriteAPI, deleteFavoriteAPI, getARecipeAPI, getFavoriteAPI, saveHistoryAPI } from './services/allAPI';
import { useNavigate } from 'react-router-dom';
import { addFavoriteAPI,deleteFavoriteAPI,getARecipeAPI,getFavoriteAPI,saveHistoryAPI } from '../Services/allAPI';

function Favorites() {

    const navigate = useNavigate();

    const [refresh,setRefresh]=useState()
    const [disAllFavorites,setDisAllFavorites]=useState()


    const dragOverFavorite=(e)=>{
        e.preventDefault()
        console.log("dragging over favorite");
    }

    const recipeDropped = async(e) =>{
        const recipeId = e.dataTransfer.getData("recipeId")
        const result = await getARecipeAPI(recipeId)
        await addFavoriteAPI(result.data)
        setRefresh(result.data)
        console.log(result.data);
    }

    const allFavorites = async() =>{
        const result = await getFavoriteAPI()
        const{data}=result
        setDisAllFavorites(data)
    }

    const removeFavRecipe = async(rId) =>{
        const result = await deleteFavoriteAPI(rId)
        setRefresh(result.data)
    }

    const handleNavigate =async (fav) =>{
        let timeData = new Date()
        let timeStamp = new Intl.DateTimeFormat('en-US',{year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(timeData)
        console.log(timeStamp);
        const{recipeName,youtubeLink}=fav
        await saveHistoryAPI({recipeName,youtubeLink,timeStamp})
        navigate("/recipe",{state:fav});
    }

    useEffect(()=>{
        allFavorites()
    },[refresh])
    

    console.log(disAllFavorites);
  return (
    <div style={{minHeight:"100vh"}} droppable="true" onDragOver={(e)=>dragOverFavorite(e)} onDrop={(e)=>recipeDropped(e)}>
        <div className='d-flex justify-content-center align-items-center w-100 border rounded mt-2  pt-1'>
            <h3 className='fh'>Favorites<i className="fa-regular fa-star ms-3"></i></h3>            
        </div>
        {disAllFavorites?.length>0?disAllFavorites?.map((fav,index)=>(
            <div key={index} className='mt-3'>
                <div className='d-flex justify-content-between'>
                    <h5 className='po' onClick={()=>handleNavigate(fav)}><i class="fa-solid fa-utensils ms-2 me-3"></i>{fav?.recipeName}</h5>
                    <button onClick={()=>removeFavRecipe(fav?.id)} className="btn btn-outline-danger">Remove</button>
                </div>
                <hr />
            </div>
        ))
        :
        <h6 className='text-danger mt-3'>Favorite is empty!!!</h6>
        }
        
    </div>
  )
}

export default Favorites