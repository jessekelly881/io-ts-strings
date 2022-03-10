# io-ts-strings

[![Test](https://github.com/jessekelly881/io-ts-strings/actions/workflows/build.yml/badge.svg)](https://github.com/jessekelly881/io-ts-strings/actions/workflows/build.yml)

String types for io-ts

Currently implemented types:

- BitcoinAddress
- CreditCardNumber
- Email
- Empty
- EthereumAddress
- IBAN
- JWT
- MacAddress
- Uppercase
- URL

Whenever a string type depends on locale(e.g phone number) multiple different codecs are supplied for each country. For example PhoneNumberFR. Currently supported locals are:

- The United States(US)
- Germany(DE)
- France(FR)

## Examples

```js
import * as t from 'io-ts'
import Email from 'io-ts-strings/dist/Email'

const codec = t.interface({
  email: Email,
})

codec.decode({ email: 'john@b.com' }) // Right
codec.decode({ email: 'john.com' }) // Left
```
