

// <script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDda4lIzFTU7zP5Olc5kOji-KDaKn6ZC-k",
    authDomain: "joinusform.firebaseapp.com",
    databaseURL: "https://joinusform.firebaseio.com",
    projectId: "joinusform",
    storageBucket: "joinusform.appspot.com",
    messagingSenderId: "916822583516",
    appId: "1:916822583516:web:599bbb0bfe1c406a7bec19",
    measurementId: "G-JFZ145WK8D"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();
// </script>


// Reference messages collection
var messagesRef = firebase.database().ref('JouinUsFormData');

// Listen for form submit
document.getElementById('joinUsForm').addEventListener('submit', submitJoinUsForm);

// Submit form
function submitJoinUsForm(e){
  e.preventDefault();

  // Get values
  var ju_name = getInputVal('ju_name');
  var ju_mobile_number = getInputVal('ju_mobile_number');
  var ju_email = getInputVal('ju_email');
  var ju_university = getInputVal('ju_university');
  var ju_graduation = getInputVal('ju_graduation');
  var ju_regNo = getInputVal('ju_regNo');
  var ju_message = getInputVal('ju_message');

  // Save message
  saveMessage(ju_name, ju_mobile_number, ju_email, ju_university, ju_graduation, ju_regNo, ju_message);

  // Show alert
  alert("Your message has been sent successfully, We'll appoint you for interview soon!");

  // Hide alert after 3 seconds
  setTimeout(function(){
    // alert("Time Out");
  },3000);

  // Clear form
  document.getElementById('joinUsForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(ju_name, ju_mobile_number, ju_email, ju_university, ju_graduation, ju_regNo, ju_message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: ju_name,
    mobile_number: ju_mobile_number,
    email: ju_email,
    university: ju_university,
    graduation: ju_graduation,
    regNo: ju_regNo,
    message: ju_message
  });
}