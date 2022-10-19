import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth'
import Swal from 'sweetalert2'

export const auth = getAuth()

export const registrarse = (obj, setUser, setError) => {
  obj.email1 === obj.email2
    ? createUserWithEmailAndPassword(auth, obj.email1, obj.email2)
        .then((userCredential) => {
          const correoUser = JSON.stringify(userCredential.user.email)
          localStorage.setItem('user', correoUser)
          setUser(correoUser)
        })
        .catch((err) => {
          Swal.fire({
            title: 'Error!',
            text: 'Ha ocurrido un error',
            icon: 'error',
            confirmButtonText: 'OK',
          })
          console.error(err)
        })
    : setError(true)
}

export const logIn = (obj, setUser) => {
  signInWithEmailAndPassword(auth, obj.email1, obj.password)
    .then((userCredential) => {
      const correoUser = JSON.stringify(userCredential.user.email)
      localStorage.setItem('user', correoUser)
      setUser(correoUser)
    })
    .catch((err) => {
      console.error(err)
      Swal.fire({
        title: 'Error!',
        text: 'Credenciales incorrectas',
        icon: 'error',
        confirmButtonText: 'OK',
      })
    })
}

export const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider()
  signInWithPopup(auth, provider)
    .then((res) => {
      localStorage.setItem('user', res.user.email)
    })
    .catch((err) => {
      console.error(err)
    })
}
