import { redirectIfLoggedIn, signInUser, signUpUser, createNewItem, checkAuth, getUser, logout, getList } from './fetch-utils.js';
import { renderItem } from './render-utils.js';


const addItem = document.getElementById('addItem');
const signInButton = document.getElementById('signInButton');
const logOutButton = document.getElementById('logOutButton');
const container = document.getElementById('form-container');

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

window.addEventListener('load', async () => {
    const user = getUser();
    if (user) {
        signInButton.classList.add('hidden');
        logOutButton.classList.remove('hidden');
    } else {
        signInButton.classList.remove('hidden');
        logOutButton.classList.add('hidden');
    }
    const list = await getList();
    for (let item of list) {
        const div = renderItem(item);
        container.append(div);
    }
});

logOutButton.addEventListener('click', async () => {
    await logout();
});

