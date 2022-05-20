import './example.test.js';
import { renderItem } from '../render-utils.js';

const test = QUnit.test;

test('renderItem should return a div including item name and quantity', async (expect) => {
    const expected = '<div class="item"><p>crabcakes - 4</p></div>';
    const actual = await renderItem({ name: 'crabcakes', quantity: '4' });
    expect.equal(actual.outerHTML, expected);
});