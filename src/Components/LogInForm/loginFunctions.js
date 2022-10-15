import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth'

export const auth = getAuth()

export const registrarse = async (
  e,
  correo1,
  correo2,
  password,
  setUser,
  setError
) => {
  e.preventDefault()
  return correo1 === correo2
    ? await createUserWithEmailAndPassword(auth, correo1, password)
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

export const logIn = async (e, correo1, password, setUser) => {
  e.preventDefault()
  return await signInWithEmailAndPassword(auth, correo1, password)
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
