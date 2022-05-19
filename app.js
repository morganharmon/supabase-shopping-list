import { redirectIfLoggedIn, signInUser, signUpUser, createNewItem } from './fetch-utils.js';



const addItem = document.getElementById('addItem');
const signInButton = document.getElementById('signInButton');

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