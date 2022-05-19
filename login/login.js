import { checkAuth, logout, signUpUser } from '../fetch-utils.js';

const signInForm = document.getElementById('signInForm');
const signInEmail = document.getElementById('signInEmail');
const signInPassword = document.getElementById('signInPassword');

const signUpForm = document.getElementById('signUpForm');
const signUpEmail = document.getElementById('signUpEmail');
const signUpPassword = document.getElementById('signUpPassword');

const homeButton = document.getElementById('homeButton');
// checkAuth();

// const logoutButton = document.getElementById('logout');

// logoutButton.addEventListener('click', () => {
//     logout();
// });

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

// signInForm.addEventListener('submit', async (e) => {
//     e.preventDefault();
//     const user = await signInUser(signInEmail.value, signInPassword.value);

//     if (user) {
//         redirectIfLoggedIn();
//     } else {
//         console.error(user);
//     }
// });