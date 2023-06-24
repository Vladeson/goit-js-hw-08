import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const emailInput = form.elements.email;
const messageInput = form.elements.message;

const storedForm = JSON.parse(localStorage.getItem('feedback-form-state')) || {};

const updateForm = () => {
    const formObject = {
        email: emailInput.value,
        message: messageInput.value
    };

    localStorage.setItem('feedback-form-state', JSON.stringify(formObject));
};

const fillForm = () => {
    if (storedForm.email) {
        emailInput.value = storedForm.email;
    }
    if (storedForm.message) {
        messageInput.value = storedForm.message;
    }
};

window.addEventListener('load', fillForm);

form.addEventListener('input', throttle(updateForm, 500));

form.addEventListener('submit', event => {
    event.preventDefault();
    if (emailInput.value && messageInput.value) {

        const submitStored = {email: emailInput.value, message: messageInput.value}
    
        console.log(submitStored)

        emailInput.value = '';
        messageInput.value = '';

        localStorage.removeItem('feedback-form-state');
    }
});