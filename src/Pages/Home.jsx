import React, { useState } from 'react'
import Add from '../Components/Add'
import View from '../Components/View'

function Home() {

  const [reloadView,setReloadView]=useState("")

  return (
    <>
      <div className='container hh'>

        <Add setReloadView={setReloadView}/>
        
        <View reloadView={reloadView}/>

      </div>
    </>
  )
}

export default Home