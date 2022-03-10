import '@relmify/jest-fp-ts';

import { Empty } from '../src'

it('Empty', () => {
  expect(Empty.decode("")).toEqualRight("")
  expect(Empty.decode("1")).toBeLeft()
  expect(Empty.decode("a")).toBeLeft()
})
