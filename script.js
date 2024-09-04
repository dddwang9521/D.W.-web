    
    var textarea = document.getElementById("userInput");
    var loadContainer = document.querySelector('#load-container');
    var guestButton = document.querySelector('.buttons.guest');
    var loginButton = document.querySelector('.buttons.login');
    var backButton = document.querySelector('.back-button');
    var overLay = document.querySelector('#overlay');
    var password = document.querySelector('.password');
    const loadCircle = document.querySelector('.load-circle');
    var logo = document.querySelector('.logo');
    //**********************************************************************************
    const firebaseConfig = {
        apiKey: "AIzaSyCPH9o5EiEw8HVzm9j-5xTuWE8cTYLOuLg",
        authDomain: "personal-web-ac563.firebaseapp.com",
        databaseURL:"https://personal-web-ac563-default-rtdb.firebaseio.com/",
        projectId: "personal-web-ac563",
        storageBucket: "personal-web-ac563.appspot.com",
        messagingSenderId: "650421723566",
        appId: "1:650421723566:web:54950c8be718fdff98a83f",
        measurementId: "G-9N62M8S6TL",
      };
      firebase.initializeApp(firebaseConfig);



      var database = firebase.database();
      database.ref('data').set({
          name: 'di w',
          age: 20
      });

      database.ref('data').once('value',function(snapshot){
            var data = snapshot.val();
            console.log(data.name);
            console.log(data.age);
      });
    //**********************************************************************************
    let db;
    const request = indexedDB.open("textSaverDB", 1);

    function textareaBehavior(){ 
        textarea.addEventListener("input", function(){
        const userInput = textarea.value;
            // loop 
            if (userInput) {
                textarea.style.paddingBottom = '10%';
            }
            else{
                textarea.style.paddingBottom = "2%";
            }
        });}
   
        textareaBehavior();
    
    
    function getDate() {
        const now = new Date();
    
        const year = now.getFullYear();
        const month = now.getMonth() + 1; // Add 1 since months are 0-indexed
        const day = now.getDate();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds} ${timeZone} `;
      }


    function goToPage(webPage){
        window.location.href = webPage;
    }
  
   

    
   
    function getRandomInt(min, max){
        return Math.floor(Math.random()*(max-min+1))+min;    
    }



    function msgStyle(msgElement){
        msgElement.style.justifyContent = 'center';
    }

    function picStyle(msgElement){
        msgElement.style.width = 'fit-content';
    }

    function removeIcon(){
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.setAttribute("id", "remove");
        svg.setAttribute("width", "10");
        svg.setAttribute("height", "10");
        svg.setAttribute("viewBox", "0 0 24 24");
        svg.setAttribute("fill", "none");
        svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
        
        // Create the first line
        const line1 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line1.setAttribute("x1", "4");
        line1.setAttribute("y1", "4");
        line1.setAttribute("x2", "20");
        line1.setAttribute("y2", "20");
        line1.setAttribute("stroke", "black");
        line1.setAttribute("stroke-width", "2");
        
        // Create the second line
        const line2 = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line2.setAttribute("x1", "4");
        line2.setAttribute("y1", "20");
        line2.setAttribute("x2", "20");
        line2.setAttribute("y2", "4");
        line2.setAttribute("stroke", "black");
        line2.setAttribute("stroke-width", "2");
        
        // Append the lines to the SVG
        svg.appendChild(line1);
        svg.appendChild(line2);

        return svg; 

    }
    guestButton.addEventListener('click', function(){
       const userPanel = document.querySelector('#postSection');
       loginButton.style.translate = '50px';
       loginButton.style.opacity = '0';
       loginButton.style.visibility = 'hidden';
       guestButton.style.translate = '72%';
       guestButton.style.borderRadius = '50%';
       

       setTimeout(() => {
        overLay.remove();
       }, 500);
       userPanel.style.display ='none';
       loadContainer.style.display ='block';
       

    });
    loginButton.addEventListener('click', function(){
      
        guestButton.style.translate = '-50px';
        guestButton.style.opacity = '0';
        guestButton.style.visibility = 'hidden';
        loginButton.style.translate = '-72%';
        loginButton.style.borderRadius = '50%';
        loginButton.classList.toggle('clicked');
        backButton.style.translate = '120%';
        backButton.style.transform = 'rotate(120deg)';
        backButton.style.visibility = 'visible';
        backButton.style.opacity = '1';
        password.focus();
       
     });
    loadContainer.addEventListener('animationend', function(){
        this.style.zIndex = '-9999';
    });

    let array = [];

    password.addEventListener('keydown',(event)=>{
        const correctPassword = ['h','e','y'];
        const key = event.key;
        const isLetterOrNumber = /^[a-zA-Z0-9]$/.test(key) || key === 'Backspace' || key === 'Enter' ;
        var check = false;
        if (isLetterOrNumber) {
            array.push(key);
        } 
        else {
            event.preventDefault(); // Optionally prevent the default action for invalid keys
        }

        loginButton.style.scale = '1.3';
        setTimeout(() => {
            loginButton.style.scale = '1';
        }, 180);

        if (key == 'Enter'){
            array.pop();
            console.log(array);
            for (i=0; i<array.length; i++){
                if (correctPassword[i] == array[i]){
                   check = true;
                   
                }
                else{
                    check = false;
                    break;
                }
            }

            if (check == true){
          
                setTimeout(() => {
                    overLay.remove();
                   }, 500);
                  
                   loadContainer.style.display ='block';
                   const color = window.getComputedStyle(loginButton).backgroundColor;
                   loadCircle.style.backgroundColor = color;
            }

            password.value = '';
            array = [];
            console.log(check);
        }
       
    });


    backButton.addEventListener('click',function(){
        guestButton.style.translate = '3px';
        guestButton.style.opacity = '1';
        guestButton.style.visibility = 'visible';
        loginButton.style.translate = '1%';
        loginButton.style.borderRadius = '5vh';
        loginButton.classList.remove('clicked');
        backButton.style.transform = 'rotate(-120deg)';
        backButton.style.translate = '-35%';
        backButton.style.visibility = 'hidden';
        backButton.style.opacity = '0';

    });


    const fileInput = document.getElementById('post-image');


    fileInput.addEventListener('change', function() {
        const imageContainer = document.querySelector('#upload-image-container');

        const imageBox = document.createElement('div');
        imageBox.className = 'upload-image-box';

        const removeButton = document.createElement('button');
        removeButton.className = 'remove-button';

        const svg = removeIcon();
        removeButton.append(svg);

        const image = document.createElement('img');
        image.className = 'image-preview';

        const file = this.files[0]; // Get the selected file

        if (file) {
            const reader = new FileReader(); // Create a FileReader to read the file

            reader.onload = function(e) {
                image.setAttribute('src', e.target.result); // Set the image src to the file's data URL
                imageBox.append(removeButton, image);
                imageContainer.append(imageBox);
            }

            reader.readAsDataURL(file); // Read the file as a data URL (base64 encoded string)
            
            
        } 

        
        removeButton.addEventListener('click',function(){
            imageBox.remove();
            fileInput.value='';
        });

    });



    function clearFile(){
        const imageBox = document.querySelector('.upload-image-box');   
        imageBox.remove();
    }




    document.querySelectorAll('.logo').forEach(image =>{
        const instagram = "diwang720";
        const outlook = 'wangd148@mcmaster.ca';
        image.addEventListener('click',function(){
            if (this.classList.contains('instagram-logo')){
                navigator.clipboard.writeText(instagram).then(function() {
                    alert("Instagram ID copied to clipboard!");
                });
            }

            else if(this.classList.contains('outlook-logo')){
                navigator.clipboard.writeText(outlook).then(function() {
                    alert("Outlook Email copied to clipboard!");
                });
            }
        });
    });



    

    //             messageData.addEventListener("click", function(){

    //                 const body = document.body;
    //                 const centerMessage = document.createElement('div');
    //                 centerMessage.id = 'centerMessage';
                    
    //                 const duplicateMsg = document.createElement('div');
    //                 duplicateMsg.className='msg';
    //                 duplicateMsg.textContent = messages[i];
        
    //                 const duplicateDate = document.createElement('div');
    //                 // duplicateDate.className='date';
    //                 duplicateDate.textContent = dates[i];
        
                   
    //                 centerMessage.append(duplicateMsg,duplicateDate);
    //                 body.append(centerMessage);
        
    //                 setTimeout(() => {
    //                     centerMessage.classList.add("show"); 
    //                   }, 10); 
        
        
    //                 const coverScreen = document.querySelector("#cover");
    //                 coverScreen.style.display = 'block';
            
    //                 coverScreen.addEventListener("click",function(){
        
    //                     coverScreen.style.display = 'none';
    //                     centerMessage.remove();
    //                 });


        
    request.onupgradeneeded = function(event) {
        db = event.target.result;
        if (!db.objectStoreNames.contains("messages")) {
            db.createObjectStore("messages", { autoIncrement: true });
        }

    };

    request.onsuccess = function(event) {
        db = event.target.result;
        loadMessagesFromFirestore();
    };
    
    // request.onsuccess = function(event) {
    //     db = event.target.result;
    //     loadMessages();
    // };

    request.onerror = function(event) {
        console.error("IndexedDB error: " + event.target.errorCode);
    };
                    
    function fileToBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
    
            reader.onload = function(event) {
                const base64String = event.target.result;
                resolve(base64String); // Resolve the promise with the Base64 string
            };
    
            reader.onerror = function(event) {
                reject(new Error("Error reading file: " + event.target.error));
            };
    
            reader.readAsDataURL(file);
        });
    }
    

    // function saveMessage(message, date, image) {
    //     const transaction = db.transaction("messages", "readwrite");
    //     const store = transaction.objectStore("messages");
    //     const entry = {text: message, date:date, image:image};

    //     store.add(entry);
        

    //     transaction.oncomplete = function() {
    //         console.log("Message stored successfully.");
    //     };
    //     transaction.onerror = function(event) {
    //         console.error("Error storing message:", event.target.error);
    //     };

    // }

    async function saveMessageToFirestore(message, date, image) {
        try {
            const docRef = await firebasedb.collection("posts").add({
                text: message,
                date: date,
                image: image || null // If image is null, store it as null
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

async function loadMessagesFromFirestore() {
        try {
            const querySnapshot = await firebasedb.collection("posts").get();
            querySnapshot.forEach((doc) => {
                const { text, date, image } = doc.data();
                displayMessage(text, date, image);
            });
        } catch (e) {
            console.error("Error getting documents: ", e);
        }
    }
    
    // function loadMessages() {
    //     const transaction = db.transaction("messages", "readonly");
    //     const store = transaction.objectStore("messages");

    //     store.openCursor().onsuccess = function(event) {
    //         const cursor = event.target.result;
    //         if (cursor) {
    //             const {text,date,image} = cursor.value;
    //             displayMessage(text,date,image);
    //             cursor.continue();
    //         }
    //     };
    // }


    function displayMessage(message, date, image) {
        const messageContainer = document.getElementById("messageContainer");

        const messageElement = document.createElement("div");
        const msg = document.createElement('div');
        const dates = document.createElement('div');
        const dateButton = document.createElement('div');

        const dice = getRandomInt(1,2);
       

        messageElement.className = "message";
        msg.className = 'msg';
        dateButton.className = 'date-button';
        dates.className = 'date';



        msg.textContent = message;
        dates.textContent = date;

        if (image){
           
            const images = document.createElement('img');
            images.className = 'images';
            images.src = image; 
            if (dice == 1){
                messageElement.append(msg,images,dateButton,dates);
            }
            else{
                messageElement.append(images,msg,dateButton,dates);
            }
        }
        
        else{ 
            messageElement.append(msg,dateButton,dates);
        }
       
        messageContainer.appendChild(messageElement);

       
        dates.style.opacity = '0';

        dateButton.addEventListener('click', function() {

            if (dates.style.opacity === '0') {
                dates.style.opacity = '1';
            } else {
                dates.style.opacity = '0';
            }
        });

}
    function clearPage(){
        let transaction = db.transaction('messages','readwrite');
        let store = transaction.objectStore('messages');
        let clearRequest = store.clear();

        clearRequest.onsuccess = function(){
            alert('IndexDB all clear');
        };

    }
 
    document.getElementById("post-button").addEventListener("click", async function() {
        const userInput = document.getElementById("userInput").value;
        const image = document.getElementById("post-image").files[0];
        const date = getDate();
        
        if (userInput) {
            let base64String = null;
            if (image) {
                base64String = await fileToBase64(image);
            }
            await saveMessageToFirestore(userInput, date, base64String);
            displayMessage(userInput, date, base64String);
        }
    
        document.getElementById("userInput").value = "";
        if (image) {
            clearFile();
        }
    });

    
// document.getElementById("post-button").addEventListener("click", async function() {
//         const userInput = document.getElementById("userInput").value;
//         const image = document.getElementById("post-image").files[0];
//         const date = getDate();
//         // clearPage();
//     if (userInput){

//         if(image){
//         const base64String = await fileToBase64(image);
//         saveMessage(userInput,date,base64String);
//         displayMessage(userInput,date,base64String);
//         }

//         else{
//             saveMessage(userInput,date,null);
//             displayMessage(userInput,date,null);
//         }
       
        

//         textarea.style.paddingBottom = "2%";
        
//     }

//     document.getElementById("userInput").value = "";
    
//     if (image){
//         clearFile();}

// });
    


   
        // span decision// 

            // wasted idea: grid container
    // function spanDecision(msgElement){
    //     const width = msgElement.offsetWidth; 
    //     const height = msgElement.offsetHeight;
    //     alert('width: '+width + '  height: ' + height);
        
    //     if (width <= 186){
    //        msgElement.style.gridColumn = 'span 6'
          
    //     }

    //     else if (width > 186 && width <= 219){
    //        msgElement.style.gridColumn = 'span 6'
           
    //     }

    //     else if (width > 219 && width <= 252){
    //        msgElement.style.gridColumn = 'span 8'
           
    //     }

    //     else if (width > 252 && width <= 284){
    //         msgElement.style.gridColumn = 'span 10'
    //     }

    //     else{
    //         msgElement.style.gridColumn = 'span 15'
    //     }


    //     if (height <= 93 ){
    //         msgElement.style.gridRow = 'span 4'
           
    //      }
    //      else if (height > 93 && height <= 132){
    //         msgElement.style.gridRow = 'span 5'
            
    //      }
    //      else if (height > 132 && height <= 171 ) {
    //         msgElement.style.gridRow = 'span 6'
            
    //      }
    //      else if (height > 171 && height <= 210 ){
    //         msgElement.style.gridRow = 'span 7'
    //      }

    //      else{
    //         msgElement.style.gridRow = 'span 10'
    //      }
 

    // }


    // button behavior; temporary//

    // function sealEnvelope() {
    //     const envelope = document.getElementById('envelope');
    //     envelope.classList.add('sealing');

    //     // return back to its original form
    //     setTimeout(() => envelope.classList.remove('sealing'), 500);
    // }



    // center message //

        // messageData.addEventListener("click", function(){

    //         const body = document.body;
    //         const centerMessage = document.createElement('div');
    //         centerMessage.id = 'centerMessage';

    //         const duplicateMsg = document.createElement('div');
    //         duplicateMsg.className='msg';
    //         duplicateMsg.textContent = userInput;

    //         const duplicateDate = document.createElement('div');
    //         // duplicateDate.className='date';
    //         duplicateDate.textContent = date;

           
    //         centerMessage.append(duplicateMsg,duplicateDate);
    //         body.append(centerMessage);

    //         setTimeout(() => {
    //             centerMessage.classList.add("show"); 
    //           }, 10); 


    //         const coverScreen = document.querySelector("#cover");
    //         coverScreen.style.display = 'block';
    
    //         coverScreen.addEventListener("click",function(){

    //             coverScreen.style.display = 'none';
    //             centerMessage.remove();
    //         });


            
    // });
