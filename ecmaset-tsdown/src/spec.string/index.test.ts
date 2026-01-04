import { expect, test } from 'vitest';
import { sliceByEndSlash, sliceByStartSlash } from '.';

test('sliceByStartSlash', () => {
  expect(sliceByStartSlash('a/b/c')).toEqual('b/c');
});

test('sliceByEndSlash', () => {
  expect(sliceByEndSlash('a/b/c')).toEqual('a/b');
});
