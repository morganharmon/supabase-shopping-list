const SUPABASE_URL = 'https://yxfajitmasxbcohtbkqt.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl4ZmFqaXRtYXN4YmNvaHRia3F0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTIyODY4MTEsImV4cCI6MTk2Nzg2MjgxMX0.2L8306PS1qjxKhAvOhaxYHjp8eowvQquvK3yZw7Nyj8';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export function checkAuth() {
    const user = getUser();

    if (!user) location.replace('../');
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

    return (window.location.href = '../');
}

export async function createNewItem(item) {
    const response = await client.from('shopping-list').insert(item);
    if (response.data) {
        return response.data;
    } else {
        console.error(response.error);
    }
}

// function checkError({ data, error }) {
//     return error ? console.error(error) : data;
// }
