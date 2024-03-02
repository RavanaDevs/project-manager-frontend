import { initializeApp } from 'firebase/app'
import { getAuth } from '@firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAmssQETGe-g7JtzOGo_VXvALtzTAQrcIQ',
  authDomain: 'web-application-developm-dd3e6.firebaseapp.com',
  projectId: 'web-application-developm-dd3e6',
  storageBucket: 'web-application-developm-dd3e6.appspot.com',
  messagingSenderId: '86617085871',
  appId: '1:86617085871:web:5e1286f89bad5413ce415a',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
