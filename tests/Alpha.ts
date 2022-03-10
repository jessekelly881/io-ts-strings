import '@relmify/jest-fp-ts';

import { Alpha } from '../src'

it('Alpha', () => {
  expect(Alpha.decode("abc")).toEqualRight("abc")
  expect(Alpha.decode("aBc")).toEqualRight("aBc")
  expect(Alpha.decode("abc✔")).toBeLeft()
  expect(Alpha.decode("abc1")).toBeLeft()
  expect(Alpha.decode("abc*")).toBeLeft()
})
