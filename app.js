import { redirectIfLoggedIn, signInUser, signupUser, createNewItem } from './fetch-utils.js';

const signInForm = document.getElementById('sign-in-form');
const signInEmail = document.getElementById('sign-in-email');
const signInPassword = document.getElementById('sign-in-password');

const signUpForm = document.getElementById('sign-up');
const signUpEmail = document.getElementById('sign-up-email');
const signUpPassword = document.getElementById('sign-up-password');

const addItem = document.getElementById('addItem');
const signIn = document.getElementById('signIn');

// if user currently logged in, redirect
// redirectIfLoggedIn();

signIn.addEventListener('click', () => {
    window.location.href = './login/index.html';
});

// signUpForm.addEventListener('submit', async (event) => {
//     event.preventDefault();
//     const user = await signupUser(signUpEmail.value, signUpPassword.value);

//     if (user) {
//         redirectIfLoggedIn();
//     } else {
//         console.error(user);
//     }
// });

// signInForm.addEventListener('submit', async (event) => {
//     event.preventDefault();
//     const user = await signInUser(signInEmail.value, signInPassword.value);

//     if (user) {
//         redirectIfLoggedIn();
//     } else {
//         console.error(user);
//     }
// });

addItem.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(addItem);
    const response = await createNewItem({ name: data.get('item'), quantity: data.get('quantity') });
    if (response) {
        window.location.href = '/';
    } else {
        console.error(response.error);
    }

});