import { 
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
  } from "./firebase.config.js";
  
  
  
  //  //////////   Signup 
  
  
  const signUp = async () => {
     let email = document.getElementById("email").value;
     let password = document.getElementById("pswd").value;
  
     try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log(userCredential.user);
  
     } catch (error) {
        console.log(error);
     }
  }
  
  document.getElementById("btn")?.addEventListener("click", signUp);
  
  
  
  
  
  //  //////////   SignIn
  
  
  const login = async () => {
   let email = document.getElementById("email").value;
   let password = document.getElementById("pswd").value;
  
   try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);   
      
   } catch (error) {
      console.log(error);
   }
  }
  
  document.getElementById("btn2")?.addEventListener("click", login);
  
  
  
  
  
  
  
  
  
  