import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {HelloWorld, HelloWorldLambda} from './function_component'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div style={
      {
        
      height: "100vh", 
      width: "100vw", 
      display: "flex",           // Enable flexbox
      justifyContent: "center",  // Center horizontally
      alignItems: "center",
      flexDirection: "column"       // Center vertically
      }
    }>
      <HelloWorld />
      <HelloWorldLambda/>
    </div>
  </StrictMode>,
)
