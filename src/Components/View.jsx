import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import RecipeCard from './RecipeCard'
import Favorites from './Favorites'
import { getRecipeAPI } from '../Services/allAPI'



function View({reloadView}) {

  const[allRecipe,setAllRecipe]=useState()
  const[realodAfterDelete,setRealodAfterDelete]=useState("")

  const displayAllRecipe=async()=>{
    const result = await getRecipeAPI()
    if(result?.status==200){
      setAllRecipe(result.data)
    }
  }

  console.log(allRecipe);
  useEffect(()=>{
    displayAllRecipe()
  },[reloadView,realodAfterDelete])

  return (
    <>
      <div className="row">
        <div className="col-lg-9">
        <Row>
            {allRecipe?.length>0?allRecipe?.map((recipe,index)=>(
              <Col key={index} className='mb-4' sm={12} md={6} lg={4}>
              <RecipeCard setRealodAfterDelete={setRealodAfterDelete} displayData={recipe}/>
              </Col>
            ))
            :
            <div className='text-danger fw-bolder'>No recipes are uploaded yet!!!</div>
            }
        </Row>
        </div>
        <div className="col-lg-3 border rounded">
          <Favorites/>
        </div>
      </div>       
        
    </>
  )
}

export default View