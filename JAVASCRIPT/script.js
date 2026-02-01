const title = document.getElementById("title");
const message = document.getElementById("message");
const image = document.getElementById("image");
const nameInput = document.getElementById('nameInput');
const output = document.getElementById("output");
const userForm = document.getElementById("userForm")

title.addEventListener("mouseover", function(){}


)



if (userForm) {
    userForm.addEventListener("submit", function (event) {
    event.preventDefault();
    
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const favoriteColor = document.getElementById("favoriteColor").value;
    
    const displayArea = document.getElementById("userDisplay")
    displayArea.innerHTML = `<div> Name: ${fullName}<br>
    Email: ${email} <br>
    Favorite color: ${favoriteColor} </div>` 

    });}



image.src = "man-going-away-waving-hand-saying-good-bye-92393033.webp";
message.style.color ='blue';

const button = document.getElementById("changeBtn");
message.innerText = 'Please click "Change Text" to change text.' 

function buttonClicked() {
  message.innerText="Text changed.";}


const button2 = document.getElementById("colorBtn");

nameInput.addEventListener("input", function (event) {
    const userName = event.target.value;
    output.innerText = `Hello ${userName}, welcome to JavaScript!`

});

function buttonClicked2() {
  message.style.color = 'red';
  message.innerText = 'Color Changed, Please click "Change Text" to change text.';}

function showAlert() {
    alert("THIS IS THE ALERT BOX!");
    console.log("Alert was shown");
}

function showConfirm() {
    confirm("This is the confirm button, CONFIRMED!");
    console.log("confirmation was shown");
}

function showPrompt() {
    const userInput =  prompt("Whats your favorite food?");
    console.log("prompt was shown");

}


console.log(title);
console.log(message);
console.log(image);