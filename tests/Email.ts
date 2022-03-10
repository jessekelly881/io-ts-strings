import '@relmify/jest-fp-ts';

import { Email } from '../src'

it('Email', () => {
  expect(Email.decode("k@jc.com")).toEqualRight("k@jc.com")
  expect(Email.decode("john@gmail.com")).toEqualRight("john@gmail.com")
  expect(Email.decode("john.gmail.com")).toBeLeft()
  expect(Email.decode("john@gmail")).toBeLeft()
})
