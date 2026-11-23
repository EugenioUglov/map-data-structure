# map-data-structure

Utility class for serializing and deserializing JavaScript `Map` structures to and from JSON strings, with support for nested `Map`s.

## Installation

```bash
npm install map-data-structure
```

## Usage

```js
const MapDataStructure = require('map-data-structure');
const mds = new MapDataStructure();

// Create a Map (including nested Maps)
const map = new Map([
  ['name', 'Alice'],
  ['settings', new Map([['theme', 'dark'], ['lang', 'en']])],
  ['count', 42],
]);

// Serialize to JSON string
const json = mds.getStringified(map);
console.log(json);
// {"name":"Alice","settings":{"_type":"map","map":[["theme","dark"],["lang","en"]]},"count":42}

// Deserialize back to Map
const restored = mds.getParsed(json);
console.log(restored instanceof Map);          // true
console.log(restored.get('settings') instanceof Map); // true
console.log(restored.get('settings').get('theme'));   // 'dark'

// Check if value is a Map
mds.isMap(new Map()); // true
mds.isMap({});        // false
```

## API

### `new MapDataStructure()`
Creates a utility instance.

### `isMap(dataToCheck) → boolean`
Returns `true` if the provided value is a `Map` instance, otherwise `false`.

### `getStringified(map) → string`
Serializes a `Map` (including nested `Map`s) to a JSON string.

### `getParsed(mapString) → Map`
Restores the `Map` structure from a JSON string created with `getStringified`.


## Support ☕🤗

If you find this package useful, you can
[![Buy Me A Coffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://buymeacoffee.com/eugeniouglb)

## License

MIT