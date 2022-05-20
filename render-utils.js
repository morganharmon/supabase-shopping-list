export async function renderItem(item) {
    const div = document.createElement('div');
    const p = document.createElement('p');
    p.textContent = item.name + ' - ' + item.quantity;
    div.classList.add('item');
    if (item.purchased) {
        div.classList.remove('item');
        div.classList.add('purchased');
    } else {
        div.classList.remove('purchased');
        div.classList.add('item');
    }
    div.append(p);  
    return div;
}