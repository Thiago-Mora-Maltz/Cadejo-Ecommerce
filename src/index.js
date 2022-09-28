import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDHoz2MxeeOM9Y9_0SUeVcNc7-XoVR395U',
  authDomain: 'cadejo-vermu.firebaseapp.com',
  projectId: 'cadejo-vermu',
  storageBucket: 'cadejo-vermu.appspot.com',
  messagingSenderId: '747702474645',
  appId: '1:747702474645:web:d98402779cdf36f268c89c',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
