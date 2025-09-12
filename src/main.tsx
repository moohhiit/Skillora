import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App.tsx'
import {  BrowserRouter, HashRouter } from "react-router-dom";
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename='/Elevana'>
  
      <App />
  
    </BrowserRouter>
  </StrictMode>,
)
