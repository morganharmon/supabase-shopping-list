import { redirectIfLoggedIn, signInUser, signUpUser, createNewItem, checkAuth, getUser, logout } from './fetch-utils.js';



const addItem = document.getElementById('addItem');
const signInButton = document.getElementById('signInButton');
const logOutButton = document.getElementById('logOutButton');

// if user currently logged in, redirect
// redirectIfLoggedIn();

signInButton.addEventListener('click', () => {
    window.location.href = './login/index.html';
});

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

window.addEventListener('load', () => {
    const user = getUser();
    if (user) {
        signInButton.classList.add('hidden');
        logOutButton.classList.remove('hidden');
    } else {
        signInButton.classList.remove('hidden');
        logOutButton.classList.add('hidden');
    }
});

logOutButton.addEventListener('click', async () => {
    await logout();
});

