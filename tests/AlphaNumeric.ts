import '@relmify/jest-fp-ts';

import { AlphaNumeric } from '../src'

it('AlphaNumeric', () => {
  expect(AlphaNumeric.decode("abc")).toEqualRight("abc")
  expect(AlphaNumeric.decode("abC")).toEqualRight("abC")
  expect(AlphaNumeric.decode("ab1")).toEqualRight("ab1")
  expect(AlphaNumeric.decode("ab-")).toBeLeft()
  expect(AlphaNumeric.decode("abc✔")).toBeLeft()
})
