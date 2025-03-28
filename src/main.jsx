import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ClassComponent from './class_component.jsx'
import FunctionCompnent from './function_component.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>
     
      <ClassComponent />
    </div>
  </StrictMode>,
)
