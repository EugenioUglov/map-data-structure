# map-data-structure

Утилитный класс для сериализации и десериализации структур JavaScript `Map` в JSON-строки и обратно, с поддержкой вложенных `Map`.

## Установка

```bash
npm install map-data-structure
```

## Использование

```js
const MapDataStructure = require('map-data-structure');
const mds = new MapDataStructure();

// Создаём Map (включая вложенные)
const map = new Map([
  ['name', 'Алиса'],
  ['settings', new Map([['theme', 'dark'], ['lang', 'ru']])],
  ['count', 42],
]);

// Сериализация в JSON-строку
const json = mds.getStringified(map);
console.log(json);
// {"name":"Алиса","settings":{"_type":"map","map":[["theme","dark"],["lang","ru"]]},"count":42}

// Десериализация обратно в Map
const restored = mds.getParsed(json);
console.log(restored instanceof Map);          // true
console.log(restored.get('settings') instanceof Map); // true
console.log(restored.get('settings').get('theme'));   // 'dark'

// Проверка, является ли значение Map
mds.isMap(new Map()); // true
mds.isMap({});        // false
```

## API

### `new MapDataStructure()`
Создаёт экземпляр утилиты.

### `isMap(dataToCheck) → boolean`
Возвращает `true`, если переданное значение является экземпляром `Map`, иначе `false`.

### `getStringified(map) → string`
Сериализует `Map` (включая вложенные `Map`) в JSON-строку.

### `getParsed(mapString) → Map`
Восстанавливает `Map`-структуру из JSON-строки, созданной через `getStringified`.

## Лицензия

MIT