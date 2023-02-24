# parse-size

A helper to parse 'size like' value into a valid size with unit.

## Install

```bash
yarn add @laomao800/parse-size

# or

npm install --save @laomao800/parse-size
```

## Usage

```js
import parseSize from '@laomao800/parse-size'

parseSize(50) // '50px'
parseSize('50') // '50px'
parseSize('50px') // '50px'
parseSize('50%') // '50%'
parseSize('50.5px') // '50.5px'
parseSize('50.5%') // '50.5%'
parseSize('a') // undefined

// Default unit. Supports all CSS valid unit.
parseSize(50, 'em') // '50em'
```
