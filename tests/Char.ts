import '@relmify/jest-fp-ts';

import { Char } from '../src'

it('Char', () => {
  expect(Char.decode("")).toBeLeft()
  expect(Char.decode("a")).toEqualRight("a")
  expect(Char.decode("ab")).toBeLeft()
})
