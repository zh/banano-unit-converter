# Banano Unit Converter

Banano Unit Converter is a thoroughly-tested library for converting units of the [Banano](https://banano.cc/) cryptocurrency. It supports the conversion of Raw to Banano and Banano to Raw.

This library code is based on great [nano-unit-converter library](https://github.com/alecrios/nano-unit-converter) by Alec Rios. 

## Unit Specifications

**Raw** `10^0` - The smallest unit, commonly used in software code.

**Banano** `10^29` - A human-friendly unit, commonly used in software interfaces.

```
100000000000000000000000000000 Raw = 1 Banano
```

Note: In this library, Raw and Banano are referred to as `raw` and `ban`, respectively. This is to avoid casing conflicts between Nano units and coding conventions.

## Installation

```
npm install banano-unit-converter
```

## API

``` ts
/**
 * Converts ban amount to raw amount.
 *
 * @param {number | string} ban The ban amount.
 *
 * @throws {Error} The ban amount must be defined.
 * @throws {TypeError} The ban amount must be a string or a number.
 * @throws {Error} The ban amount is invalid.
 * @throws {Error} The ban amount must not be negative.
 * @throws {Error} The ban amount is too small.
 * @throws {Error} The ban amount is too large.
 *
 * @returns {string} The raw amount.
 */
export declare function banToRaw(ban: number | string): string;
```

``` ts
/**
 * Converts raw amount to ban amount.
 *
 * @param {number | string} raw The raw amount.
 *
 * @throws {Error} The raw amount must be defined.
 * @throws {TypeError} The raw amount must be a string or a number.
 * @throws {Error} The raw amount is invalid.
 * @throws {Error} The raw amount must not be negative.
 * @throws {Error} The raw amount is too small.
 * @throws {Error} The raw amount is too large.
 *
 * @returns {string} The ban amount.
 */
export declare function rawToBan(raw: number | string): string;
```

## Examples

```js
import { banToRaw, rawToban } from 'nano-unit-converter';

banToRaw('0.1');                             // '10000000000000000000000000000'
banToRaw('1');                               // '100000000000000000000000000000'
banToRaw('10');                              // '1000000000000000000000000000000'

rawToban('10000000000000000000000000000')   // '0.1'
rawToban('100000000000000000000000000000')  // '1'
rawToban('1000000000000000000000000000000') // '10'
```

## See Also

- [Nano Unit Converter](https://github.com/alecrios/nano-unit-converter) - Converting units of the Nano cryptocurrency. 
- [Nano Address Validator](https://github.com/alecrios/nano-address-validator) - Validates Nano addresses for syntax and checksum integrity.
- [Nano URI Generator](https://github.com/alecrios/nano-uri-generator) - Generates Nano URIs for sending amounts, changing representatives, and more.
