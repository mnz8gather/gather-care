import { expect, test } from 'vitest';
import { arrayMove } from '.';

test('arrayMove', () => {
  expect(arrayMove(['a', 'b', 'c'], 0, 2)).toEqual(['b', 'c', 'a']);
});
