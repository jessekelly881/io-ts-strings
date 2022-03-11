# io-ts-strings

[![Test](https://github.com/jessekelly881/io-ts-strings/actions/workflows/build.yml/badge.svg)](https://github.com/jessekelly881/io-ts-strings/actions/workflows/build.yml)

String types for io-ts

```bash
npm install io-ts-string s
```

Currently implemented types:

- Alpha
- AlphaNumeric
- Ascii
- Base32, Base58, Base64
- BIC(SWIFT Code)
- BitcoinAddress
- Char(String of length 1)
- CountryCode, CountryCode2 (e.g. "US"), CountryCode3 (e.g. "USA")
- CreditCard, Visa, Mastercard
- DataURI (e.g. "data:,Hello%2C%20World%21")
- EAN(European Article Number)
- Email
- Empty(i.e. "")
- EthereumAddress
- MD4, MD5, SHA1, SHA256
- Hexadecimal
- HexColor (e.g. "#eb4034")
- HostName (e.g. "localhost:3000", "foo.example.com")
- HSL (hue, saturation, lightness)
- IBAN(International Bank Account Number)
- IP (either v4 or v6), IPv6, IPv4
- IPRange (E.g. "255.255.255.255/30"), IPRangev6, IPRangev6
- ISIN (International Securities Identification Number)
- ISRC (International Standard Recording Code)
- ISSN (International Standard Serial Number)
- JWT (JSON Web Token)
- LatLong (e.g. "lat,long", "lat, long")
- Locale
- Lowercase
- MacAddress
- MagnetURI
- MongoID (MongoDB Object ID)
- NonEmpty
- Numeric
- Octal
- PassportNumber (By country. E.g. PassportNumberUS)
- PhoneNumber (By Country. E.g. PhoneNumberUS)
- Port
- PostalCode (By Country. E.g. PostalCodeUS)
- SemVer (Semantic Version Number)
- StrongPassword
- Uppercase
- URL
- UUID (v3, v4, or v5), UUIDv3, UUIDv4, UUIDv5

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
