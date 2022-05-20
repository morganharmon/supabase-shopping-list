const SUPABASE_URL = 'https://yxfajitmasxbcohtbkqt.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl4ZmFqaXRtYXN4YmNvaHRia3F0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTIyODY4MTEsImV4cCI6MTk2Nzg2MjgxMX0.2L8306PS1qjxKhAvOhaxYHjp8eowvQquvK3yZw7Nyj8';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export function checkAuth() {
    const user = getUser();

    if (!user) { 
        window.location.href = './login/index.html';
        alert('Log in or sign up to create your shopping list!');
    }
}

export function redirectIfLoggedIn() {
    if (getUser()) {
        location.replace('./other-page');
    }
}

export async function signUpUser(email, password) {
    const response = await client.auth.signUp({ email, password });

    return response.user;
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });

    return response.user;
}

export async function logout() {
    await client.auth.signOut();

    return (window.location.href = '/');
}

export async function createNewItem(item) {
    const response = await client.from('shopping-list').insert(item);
    if (response.data) {
        return response.data;
    } else {
        console.error(response.error);
    }
}

export async function getList() {
    const response = await client.from('shopping-list').select('*').order('created_at');
    return response.data;
}

export async function purchase(item) {
    const response = await client.from('shopping-list').update({ purchased: !item.purchased }).match({ id: item.id });
    if (response.data) {
        return response.data;
    } else {
        console.error(response.error);
    }
}

export async function deleteAll() {
    const user = await getUser();
    await client.from('shopping-list').delete().match({ user_id: user.id });
    window.location.href = '/';
}

// function checkError({ data, error }) {
//     return error ? console.error(error) : data;
// }
