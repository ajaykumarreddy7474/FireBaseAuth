import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyC5L_6mRWVvtXixWapM1wRwCtshc1hAQfw",
  authDomain: "fbform-46bb2.firebaseapp.com",
  projectId: "fbform-46bb2",
  storageBucket: "fbform-46bb2.appspot.com",
  messagingSenderId: "663826085698",
  appId: "1:663826085698:web:a77bbc3f2a1d8508973adb"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


document.getElementById('reg-btn').addEventListener('click',function(){
    document.getElementById('register-div').style.display="inline";
    document.getElementById('login-div').style.display="none";
   
});

document.getElementById('log-btn').addEventListener('click',function(){
    document.getElementById('register-div').style.display="none";
    document.getElementById('login-div').style.display="inline";
   
});




document.getElementById("login-btn").addEventListener('click',
function() {
    const loginEmail = document.getElementById("login-email").value;
    const loginPassword = document.getElementById("login-password").value;

    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
    .then((userCredential) => {
    const user = userCredential.user;
    document.getElementById("result-box").style.display="inline";
    document.getElementById("login-div").style.display="none";
    document.getElementById("result").innerHTML="Welcome Back <br>"+ loginEmail +" was logged successfully";
  })

  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    document.getElementById("result-box").style.display="inline";
    document.getElementById("login-div").style.display="none";
    document.getElementById("result").innerHTML="Sorry! <br>"+ errorMessage;
  });


});

document.getElementById("register-btn").addEventListener('click',function() {
    const registerEmail = document.getElementById("register-email").value;
    const registerPassword = document.getElementById("register-password").value;

    createUserWithEmailAndPassword(auth, registerEmail, registerPassword )
    .then((userCredential) => {
    const user = userCredential.user;
    document.getElementById("result-box").style.display="inline";
    document.getElementById("register-div").style.display="none";
    document.getElementById("result").innerHTML="Welcome  <br>"+ registerEmail +" was Registered successfully";
  })

  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    document.getElementById("result-box").style.display="inline";
    document.getElementById("register-div").style.display="none";  document.getElementById("result-box").style.display="inline";
    document.getElementById("register-div").style.display="none";
    document.getElementById("result").innerHTML="Sorry! <br>"+ errorMessage;
  });
});

document.getElementById("log-out-btn").addEventListener('click',function() {
    signOut(auth).then(() => {
        document.getElementById("result-box").style.display="none";
        document.getElementById("login-div").style.display="inline";
    }).catch((error) => {
        document.getElementById("result").innerHTML="Sorry! <br>"+ errorMessage;

    });
});