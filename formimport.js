import { form } from "./formexport.js"
let myInfo = {
    name: "Danylo",
    email: "danylod@gmail.com",
    message: "How are you?"
}
console.log((form(myInfo)))
if(form(myInfo)){
    alert("Your personal info has been sent! You can check it in console.")
}
let buttonSend = document.querySelector(".send-form")
buttonSend.addEventListener("click", function(){
    event.preventDefault()
})