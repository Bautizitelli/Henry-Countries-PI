import {Route, Routes} from "react-router-dom"

import Landing from './components/Landing/Landing'
import Home from './components/Home/Home'
import Form from './components/Form/Form'
import Detail from './components/Detail/Detail'
import ActivityList from "./components/Activity/Activity"

import './App.css'
import { useState } from "react"

function App() {
  
  return (
    <>
      <div className='App'>
      </div>
      <Routes>
        <Route path='/' element={<Landing/>}></Route>
        <Route exact path='/home' element={<Home/>}></Route>
        <Route path='/home/:idPais' element={<Detail/>}></Route>
        <Route path='/activities' element={<Form/>}></Route>
        <Route path='/activities/activity-list' element={<ActivityList/>}></Route>
      </Routes>
      
    </>
  )
}

export default App
