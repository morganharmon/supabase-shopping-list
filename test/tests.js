import './example.test.js';
import { renderItem } from '../render-utils.js';

const test = QUnit.test;

test('renderItem should return a div including item name and quantity', (expect) => {
    const expected = '<div><p>crabcakes - 4</p></div>';
    const actual = renderItem({ name: 'crabcakes', quantity: '4' });
    expect.equal(actual.outerHTML, expected);
});