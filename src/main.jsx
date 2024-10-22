import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import Greetings from "./Greetings.jsx";
import Testing from "./Testing.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Greetings />
    <Testing/>
  </StrictMode>,
)
