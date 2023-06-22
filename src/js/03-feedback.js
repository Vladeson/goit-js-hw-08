import throttle from 'lodash.throttle';


const form = document.querySelector(".feedback-form");

const emailInput = form.elements.email;
const messageInput = form.elements.message;

const storedValue = localStorage.getItem('feedback-form-state')

if (JSON.parse(storedValue)) {
    emailInput.value = JSON.parse(storedValue).email;
    messageInput.value = JSON.parse(storedValue).message;
}

form.addEventListener('input', throttle(function() {
    const inputValue = {
      email: emailInput.value,
      message: messageInput.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(inputValue));
}, 500));
  
form.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log(storedValue)
    emailInput.value = "";
    messageInput.value = "";
    localStorage.clear('feedback-form-state')
})