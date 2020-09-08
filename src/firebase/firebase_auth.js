import firebase from 'firebase'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyC6EYw1V6fcW-AhdVThozGBB4VeAAZJoTU",
    authDomain: "shop-5828a.firebaseapp.com",
    databaseURL: "https://shop-5828a.firebaseio.com",
    projectId: "shop-5828a",
    storageBucket: "shop-5828a.appspot.com",
    messagingSenderId: "244480566178",
    appId: "1:244480566178:web:51d31ee060852ce1a388fb",
    measurementId: "G-XVDDDD4HRL"
  }

firebase.initializeApp(config)

export const auth = firebase.auth()
 
export const GoogleProvider = new firebase.auth.GoogleAuthProvider()

GoogleProvider.setCustomParameters({prompt: 'select_account'})


export const createUser = async (loggedInUser) => {

 try {
  const resp = await fetch('http://localhost:4000/adduser', {
    method:'PUT',
    headers: {
      'Content-Type': 'application/json'
    }
    ,
    body: JSON.stringify(loggedInUser)
  })

 const data = await resp.json();
   return data
 } catch (error) {
   console.log(error.message)
 }
}

export const getCurrentUser = () => {
  return new Promise((resolve,reject) => {
   const unsubscribe = auth.onAuthStateChanged(user => {
     unsubscribe()
       resolve(user)
   },reject)
  })
}

export const addCollectionToDb = async  collections => {
  const mappedCollctions = await collections.map(collection => ({
    title: collection.title,
    items:collection.items
  }))

  mappedCollctions.forEach( collection => (

       fetch('http://localhost:4000/addCollection', {
      method:'PUT',
      headers: {
        'Content-Type': 'application/json'
      }
      ,
      body: JSON.stringify(collection)
    }).then(resp => resp.json()).then(data => console.log(data)).catch(err => console.log(err))
  ))
}
// export const signInWithGoogle = () => auth.signInWithPopup(GoogleProvider) 
export default firebase