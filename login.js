
document.getElementById("loginForm").addEventListener("submit",(event)=>{
    event.preventDefault()
})


//state changed cred...
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    location.replace("index.html")
  }
});


function login(){
     const email = document.getElementById("email").value 
     const password = document.getElementById("password").value 
     import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

     const auth = getAuth();
     signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
     // Signed in 
     const user = userCredential.user;
    // ...
  })

     .catch((error)=>{
         document.getElementById("error").innerHTML = error.message
     })
}

function signUp(){
      const email = document.getElementById("email").value 
      const password = document.getElementById("password").value 
      import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      // ...
  })

      .catch((error)=>{
        document.getElementById("error").innerHTML = error.message
    })
}

function forgotPass(){
  const email = document.getElementById("email").value 
  //password reset code....
  import { getAuth, sendPasswordResetEmail } from "firebase/auth";

  const auth = getAuth();
  sendPasswordResetEmail(auth, email)
  .then(() => {
    // Password reset email sent!
    // ..
  })

  .catch((error)=>{
    document.getElementById("error").innerHTML = error.message
  })
}