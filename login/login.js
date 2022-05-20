import { signUpUser, signInUser } from '../fetch-utils.js';

const signInForm = document.getElementById('signInForm');
const signUpForm = document.getElementById('signUpForm');
const homeButton = document.getElementById('homeButton');

homeButton.addEventListener('click', () => {
    window.location.href = '/';
});

signUpForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(signUpForm);
    const user = await signUpUser(data.get('email'), data.get('password'));
    if (user) {
        window.location.href = '/';
    } else {
        console.error(user);
    }
});

signInForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(signInForm);
    const user = await signInUser(data.get('email'), data.get('password'));

    if (user) {
        window.location.href = '/';
    } else {
        console.error(user);
    }
});