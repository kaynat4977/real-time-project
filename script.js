import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getDatabase, ref, set, onValue } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-database.js"; 
const firebaseConfig = {
  apiKey: "AIzaSyDiP_UARHSYiiw_DQ0203JC2UDJMJpDFmc",
  authDomain: "real-time-counter-aap.firebaseapp.com",
  projectId: "real-time-counter-aap",
  storageBucket: "real-time-counter-aap.firebasestorage.app",
  messagingSenderId: "227129389778",
  appId: "1:227129389778:web:878c6d6a2eb92c149b730b",
  measurementId: "G-PX283EP86P"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const counterRef = ref(db, "counter"); 
 function updateCounter(value) {   
 set(counterRef, value); } 
document.getElementById("increment").addEventListener("click", function () {  
 let count = Number(document.getElementById("counter").innerText);   
updateCounter(count + 1); }); 
document.getElementById("decrement").addEventListener("click", function () {
 let count = Number(document.getElementById("counter").innerText);    
 updateCounter(count - 1);
 });
  onValue(counterRef, function (snapshot) {
  document.getElementById("counter").innerText = snapshot.val();
 }); 