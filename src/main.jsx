import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import Greetings from "./components/Greetings.jsx";
import Testing from "./components/Testing.jsx";
import Avatar from './components/Avatar.jsx';
import TodoList from './components/TodoList.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Greetings />
    <Avatar/>
    <Testing/>
    <TodoList/>
  </StrictMode>,
)
