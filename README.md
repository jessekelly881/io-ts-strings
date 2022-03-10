# io-ts-string-types

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
