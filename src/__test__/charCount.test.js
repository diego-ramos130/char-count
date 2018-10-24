'use strict';

const charCount = require('../lib/charCount');
// Map { 'c' => 1, 'h' => 1, 'e' => 2, 's' => 1 }

describe('charCount.js', () => {
  test('happy path: generic answer for generic string', () => {
    const ans = new Map();
    ans.set('c', 1).set('h', 1).set('e', 3).set('s', 1);
    expect(charCount('cheese')).toEqual(ans);
  });
  test('unhappy path: nothing', () => {
    const ans = new Map();
    expect(charCount('')).toEqual(ans);
  });
  test('unhappy path: w h i t e s p a c e', () => {
    const ans = new Map();
    ans.set(' ', 3);
    expect(charCount('   ')).toEqual(ans);
  });
});
