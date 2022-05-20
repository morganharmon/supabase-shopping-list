export async function renderItem(item) {
    const div = document.createElement('div');
    const p = document.createElement('p');
    p.textContent = item.name + ' - ' + item.quantity;
    if (item.purchased) {
        div.classList.add('purchased');
    } else {
        div.classList.remove('purchased');
    }
    
    div.append(p);
    
    return div;
}