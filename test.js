const assert = require('assert');
const MapDataStructure = require('./mapDataStructure.js');

const mds = new MapDataStructure();

// isMap
assert.strictEqual(mds.isMap(new Map()), true);
assert.strictEqual(mds.isMap({}), false);
assert.strictEqual(mds.isMap('string'), false);
assert.strictEqual(mds.isMap(null), false);

// getStringified / getParsed with nested Map
const original = new Map([
  ['name', 'Алиса'],
  ['settings', new Map([['theme', 'dark'], ['lang', 'ru']])],
  ['count', 42],
]);

const json = mds.getStringified(original);
assert.strictEqual(typeof json, 'string');

const restored = mds.getParsed(json);
assert.ok(restored instanceof Map);
assert.strictEqual(restored.get('name'), 'Алиса');
assert.strictEqual(restored.get('count'), 42);

const settings = restored.get('settings');
assert.ok(settings instanceof Map);
assert.strictEqual(settings.get('theme'), 'dark');
assert.strictEqual(settings.get('lang'), 'ru');

// Empty map round-trip
const emptyJson = mds.getStringified(new Map());
const emptyRestored = mds.getParsed(emptyJson);
assert.ok(emptyRestored instanceof Map);
assert.strictEqual(emptyRestored.size, 0);

console.log('Все тесты пройдены ✅');