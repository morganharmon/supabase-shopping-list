export function renderItem(item) {
    const div = document.createElement('div');
    const p = document.createElement('p');
    p.textContent = item.name + ' - ' + item.quantity;

    div.append(p);
    return div;
}