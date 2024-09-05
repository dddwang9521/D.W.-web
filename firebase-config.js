import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";
      const firebaseConfig = {
        apiKey: "AIzaSyCPH9o5EiEw8HVzm9j-5xTuWE8cTYLOuLg",
        authDomain: "personal-web-ac563.firebaseapp.com",
        databaseURL: "https://personal-web-ac563-default-rtdb.firebaseio.com",
        projectId: "personal-web-ac563",
        storageBucket: "personal-web-ac563.appspot.com",
        messagingSenderId: "650421723566",
        appId: "1:650421723566:web:54950c8be718fdff98a83f",
        measurementId: "G-9N62M8S6TL",
      };
const app = initializeApp(firebaseConfig);
const firebasedb = getFirestore(app);

export { firebasedb };
