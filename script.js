document.getElementById("registrationForm").addEventListener("submit", function(e){
e.preventDefault();

let isValid = true;

// Access using getElementById
let username = document.getElementById("username").value.trim();
let email = document.getElementById("email").value.trim();
let phone = document.getElementById("phone").value.trim();
let password = document.getElementById("password").value.trim();
let confirmPassword = document.getElementById("confirmPassword").value.trim();

let errors = document.getElementsByClassName("error");

// Clear previous errors
for(let i=0;i<errors.length;i++){
errors[i].innerHTML="";
}

// All fields mandatory
if(username === ""){
errors[0].innerHTML="Username is required";
isValid=false;
}

// Email validation (Regex)
let emailPattern = /^[a-zA-Z]{2,}@[a-zA-Z]{3}\.[a-zA-Z]{2,3}$/;
if(!emailPattern.test(email)){
errors[1].innerHTML="Invalid Email format";
isValid=false;
}

// Phone validation
let phonePattern = /^[0-9]{10}$/;
if(!phonePattern.test(phone)){
errors[2].innerHTML="Phone must be 10 digits";
isValid=false;
}

// Password validation
let passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[&,$#@]).{7,}$/;
if(!passwordPattern.test(password)){
errors[3].innerHTML="Password must contain capital, digit & special char (&,$,#@)";
isValid=false;
}

// Confirm password
if(password !== confirmPassword){
errors[4].innerHTML="Passwords do not match";
isValid=false;
}

if(isValid){

// DOM Manipulation
document.getElementById("formTitle").innerHTML="Registration Successful!";
document.getElementById("formTitle").style.color="green";

// Add text node
let newNode = document.createTextNode(" Welcome to the portal!");
document.getElementById("formTitle").appendChild(newNode);

// jQuery Ajax simulation
$.ajax({
url: "https://jsonplaceholder.typicode.com/posts",
method: "POST",
data: {username,email,phone},
success: function(response){
alert("Form Submitted Successfully (Ajax)");
}
});
}
});

// Change Image using DOM
function changeImage(){
document.getElementById("profileImg").src="https://via.placeholder.com/150/0000FF/FFFFFF";
}

// jQuery Operations
$(document).ready(function(){

// Change button text
$("#submitBtn").text("Submit Now");

// Set background image using jQuery CSS
$("body").css("background-image","url('https://images.unsplash.com/photo-1508780709619-79562169bc64')");

// Access form data using jQuery
$("#submitBtn").click(function(){
console.log($("#username").val());
});

// Add attribute using jQuery
$("#username").attr("placeholder","Enter your username");

});