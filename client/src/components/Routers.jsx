import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from './Home'
import { CreateEntity } from './CreateEntity'
import {Entity} from "./Entity"


function Routers() {
  return (<>
<Routes>
    <Route path="/" element={<Home />}></Route>
  <Route path="/listing/:id"  element={<Entity />}></Route>
   <Route path = "/listing/create" element = {<CreateEntity/>}></Route>
</Routes>
 </>
  )
}

export default Routers