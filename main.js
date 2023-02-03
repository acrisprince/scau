const firebaseConfig = {
    apiKey: "AIzaSyBRT6QcoFGc8RZlQC6c4hXNyyXeQhF8I9k",
    authDomain: "donateform-scau.firebaseapp.com",
    databaseURL: "https://donateform-scau-default-rtdb.firebaseio.com",
    projectId: "donateform-scau",
    storageBucket: "donateform-scau.appspot.com",
    messagingSenderId: "306510399234",
    appId: "1:306510399234:web:b4c0234b94cbca6366e41b"
  };
// initialize firebase
  firebase.initializeApp(firebaseConfig);

  //reference your database
  var donateFormDB = firebase.database().ref("donateForm")

  document.getElementById("donateForm").addEventListener("submit", submitForm);

  function submitForm(e){
    e.preventDefault();
    var firstname = getElementval("firstname");
    var middlename = getElementval("middlename");
    var lastname = getElementval("lastname");
    var number = getElementval("num");
    var emailid = getElementval("emailid");
    var amount = getElementval("amount");
    var msgContent = getElementval("msgContent");
    saveMessages(firstname, middlename, lastname, number, emailid, amount, msgContent);

    // enable alert
    document.querySelector('.alert').style.display = 'block';

    //remove alert
    setTimeout(() => {
        document.querySelector('.alert').style.display = 'none';

    }, 3000);

    //reset form
    document.getElementById("donateForm").reset()
  }

  const saveMessages = (firstname, middlename, lastname, num, emailid, amount, msgContent) =>{
    var newDonationForm = donateFormDB.push();

    newDonationForm.set({
        firstname: firstname,
        middlename: middlename,
        lastname: lastname,
        number: num,
        emailid: emailid,
        amount: amount,
        msgContent: msgContent,
    });
  }; 


  const getElementval = (id) => {
    return document.getElementById(id).value;
  };


let menu = document.querySelector('.fa-bars');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click',function(){
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('nav-toggle');
});

window.addEventListener('scroll', () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('nav-toggle');
});

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}
function mFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("mor");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}
function mybFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("mo");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}
function mybtFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("morre");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}
function mybtnFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("mores");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}
function mybutFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("morres");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
  }
}