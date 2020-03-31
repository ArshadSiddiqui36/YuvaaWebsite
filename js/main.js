

// <script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDdC9-gh50edP6OrsCByd1AK1MD_DMG1p4",
    authDomain: "contactform-4c565.firebaseapp.com",
    databaseURL: "https://contactform-4c565.firebaseio.com",
    projectId: "contactform-4c565",
    storageBucket: "contactform-4c565.appspot.com",
    messagingSenderId: "637300423320",
    appId: "1:637300423320:web:16576dbe5b3d6b06c02eed",
    measurementId: "G-48CTRHQCN4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();
// </script>



// Initialize Firebase (ADD YOUR OWN DATA)
// var config = {
//   apiKey: "xxxxx",
//   authDomain: "xxxxx",
//   databaseURL: "xxxxx",
//   projectId: "xxxxx",
//   storageBucket: "xxxxx",
//   messagingSenderId: "xxxxx"
// };
// firebase.initializeApp(config);



// Reference messages collection
var messagesRef = firebase.database().ref('ContactUsFormData');

// Listen for form submit
document.getElementById('contactUsForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var mobile_number = getInputVal('mobile_number');
  var email = getInputVal('email');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, mobile_number, email, message);

  // Show alert
  alert("Your message has been sent successfully, We'll contact you soon!");

  // Hide alert after 3 seconds
  setTimeout(function(){
    // alert("Time Out");
  },3000);

  // Clear form
  document.getElementById('contactUsForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, mobile_number, email, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    mobile_number: mobile_number,
    email: email,
    message: message
  });
}
