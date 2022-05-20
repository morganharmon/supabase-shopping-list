import { redirectIfLoggedIn, signInUser, signUpUser, createNewItem, checkAuth, getUser, logout, getList, purchase, deleteAll } from './fetch-utils.js';
import { renderItem } from './render-utils.js';


const addItem = document.getElementById('addItem');
const signInButton = document.getElementById('signInButton');
const logOutButton = document.getElementById('logOutButton');
const items = document.getElementById('items');
const deleteButton = document.getElementById('deleteButton');

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

logOutButton.addEventListener('click', async () => {
    await logout();
});

async function displayItems() {
    items.textContent = '';
    const user = getUser();

    if (user) {
        signInButton.classList.add('hidden');
        logOutButton.classList.remove('hidden');
    } else {
        signInButton.classList.remove('hidden');
        logOutButton.classList.add('hidden');
    }

    const list = await getList();
    if (list) {
        for (let item of list) {
            const div = await renderItem(item);
            div.addEventListener('click', async (e) => {
                e.preventDefault();
                await purchase(item);
                displayItems();
            });
            items.append(div);
        }
    }
}

deleteButton.addEventListener('click', () => {
    window.confirm('Are you sure you want to delete your list?');
    if (confirm) {
        deleteAll();
    }
});

checkAuth();
displayItems();