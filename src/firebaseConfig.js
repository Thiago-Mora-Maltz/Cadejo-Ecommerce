import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDHoz2MxeeOM9Y9_0SUeVcNc7-XoVR395U',
  authDomain: 'cadejo-vermu.firebaseapp.com',
  projectId: 'cadejo-vermu',
  storageBucket: 'cadejo-vermu.appspot.com',
  messagingSenderId: '747702474645',
  appId: '1:747702474645:web:d98402779cdf36f268c89c',
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
