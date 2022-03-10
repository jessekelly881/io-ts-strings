import '@relmify/jest-fp-ts';

import { Ascii } from '../src'

it('Ascii', () => {
  expect(Ascii.decode("abc")).toEqualRight("abc")
  expect(Ascii.decode("-abc")).toEqualRight("-abc")
  expect(Ascii.decode("abC")).toEqualRight("abC")
  expect(Ascii.decode("abc✔")).toBeLeft()
})
