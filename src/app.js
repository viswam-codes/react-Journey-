
import React from 'react'
import ReactDOM from 'react-dom'
import Header from './components/Header'
import Body from './components/Body'







//keys are mandatory for better perfomance of our application
// Use unieque ID for keys >>>> using index as key(not recommended by REACT)



const AppLayout = ()=>{
  return (
    <div className="app">
      < Header />
      < Body />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(< AppLayout />)