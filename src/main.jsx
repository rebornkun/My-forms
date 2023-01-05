import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './containers/App'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';



ReactDOM.createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
    <React.StrictMode>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        <App />
      </GoogleOAuthProvider>
    </React.StrictMode>
  </BrowserRouter>
)
