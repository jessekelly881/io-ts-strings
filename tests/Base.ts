import '@relmify/jest-fp-ts';

import { Base32 } from '../src'

it('Base32', () => {
  expect(Base32.decode("ORSXG5A=")).toEqualRight("ORSXG5A=")
  expect(Base32.decode("GJXGIVDFON2A====")).toEqualRight("GJXGIVDFON2A====")
  expect(Base32.decode("abc")).toBeLeft()
  expect(Base32.decode("AB")).toBeLeft()
  expect(Base32.decode("AB+")).toBeLeft()
  expect(Base32.decode("AB==")).toBeLeft()
})
