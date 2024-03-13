import React, { useEffect, useState } from 'react'
// import { deleteRecipeHistoryAPI, getHistoryAPI } from './services/allAPI'
import { deleteRecipeHistoryAPI,getHistoryAPI } from '../Services/allAPI'


function History() {

  const [history,setHistory]= useState()
  const [historyRefresh,setHistoryRefresh]=useState()

  const getHistory = async() =>{
    const result = await getHistoryAPI()
    setHistory(result.data)
  }
  console.log(history);

  useEffect(()=>{
    getHistory()
  },[historyRefresh])

  const deleteHistory = async(rId)=>{
    const result = await deleteRecipeHistoryAPI(rId)
    setHistoryRefresh(result.data)
    console.log(rId);
  }

  return (
    <>
      <div className='container his' style={{minHeight:"100vh"}}>
      <h2 className="my-2 text-center">Recently Coocked</h2>
      <table className='table my-5'>
        <thead>
          <tr>
            <th>#</th>
            <th>Recipe Name</th>
            <th>Video Link</th>
            <th>Time Stamp</th>
            <th><i className='fa-solid fa-ellipsis-vertical'></i></th>
          </tr>
        </thead>
        <tbody>
          {history?.length>0?history.map((recipe,index)=>(
            <tr key={index}>
            <td>{index+1}</td>
            <td>{recipe.recipeName}</td>
            <td><a href={recipe.youtubeLink} target='_blank'>{recipe.youtubeLink}</a></td>
            <td>{recipe.timeStamp}</td>
            <td><button className='btn' onClick={()=>deleteHistory(recipe.id)}><i className='fa-solid fa-trash text-danger'></i></button></td>
          </tr>
          ))
          :
          <tr className='text-danger'>Nothing to display</tr>
        }
          
        </tbody>
      </table>
      </div>
    </>
  )
}

export default History