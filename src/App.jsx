import { useState } from 'react'
import './App.css'
import Displayapi from './Display-apiData/Displayapi'
import FetchData from './Fetch-api/FetchData'
import DisplayBar from './Display-apiData/DisplayBar'

function App() {

  return (
    <>
    <h1>Display API data in Pie Chart</h1>
      <Displayapi/>
      <h1>Display API data in Bar Graph</h1>
      <DisplayBar/>
      <h1>Display API data in Tabular format</h1>
      <FetchData/>
    </>
  )
}

export default App
