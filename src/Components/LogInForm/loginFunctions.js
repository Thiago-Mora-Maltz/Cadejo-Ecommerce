import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth'

export const auth = getAuth()

export const registrarse = async (obj, setUser, setError) => {
  return obj.email1 === obj.email2
    ? await createUserWithEmailAndPassword(auth, obj.email1, obj.email2)
        .then((userCredential) => {
          const correoUser = JSON.stringify(userCredential.user.email)
          localStorage.setItem('user', correoUser)
          setUser(correoUser)
        })
        .catch((err) => {
          alert('email already in use')
          console.error(err)
        })
    : setError(true)
}

export const logIn = async (obj, setUser) => {
  return await signInWithEmailAndPassword(auth, obj.email1, obj.password)
    .then((userCredential) => {
      const correoUser = JSON.stringify(userCredential.user.email)
      localStorage.setItem('user', correoUser)
      setUser(correoUser)
    })
    .catch((err) => {
      console.error(err)
      alert('usuario no existente')
    })
}

export const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider()
  signInWithPopup(auth, provider)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.error(err)
    })
}
