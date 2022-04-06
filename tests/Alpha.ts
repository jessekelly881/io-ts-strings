import '@relmify/jest-fp-ts';
import { Alpha, alphaDecoder } from '../src'


describe('Alpha', () => {

  it("brand", () => {
    expect(Alpha.decode("abc")).toEqualRight("abc")
    expect(Alpha.decode("aBc")).toEqualRight("aBc")
    expect(Alpha.decode("abc✔")).toBeLeft()
    expect(Alpha.decode("abc1")).toBeLeft()
    expect(Alpha.decode("abc*")).toBeLeft()
  })

  it("decoder", () => {
    expect(alphaDecoder().decode("abc")).toEqualRight("abc")
    expect(alphaDecoder().decode("aBc")).toEqualRight("aBc")
    expect(alphaDecoder().decode("abc✔")).toBeLeft()
    expect(alphaDecoder().decode("abc1")).toBeLeft()
    expect(alphaDecoder().decode("abc*")).toBeLeft()
  })
})

