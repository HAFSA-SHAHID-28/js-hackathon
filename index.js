import { 
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut
 } from "./firebase.config.js";


//  signup

 const signUp = async (e) => {
    e.preventDefault();
    let email = document.getElementById("email").value;
    let password = document.getElementById("pswd").value;
  
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
  
    } catch (error) {
      console.log(error);
    }
  };
  
  document.getElementById("signup-form")?.addEventListener("submit", signUp);





  ////////////////// SignIn

const login = async () => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("pswd").value;
  
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      // console.log(userCredential.user);
      if (!auth.currentUser.emailVerified) {
        console.log(auth.currentUser);
  
        await sendEmailVerification(auth.currentUser);
        console.log("email sent successfully");
      } else {
        window.location.replace("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  document.getElementById("btn2")?.addEventListener("click", login);
  