# json2tf

This package exports a single function, `json2tf`, which takes a JSON object and returns a Terraform configuration string.

It is NOT designed to output modules, resources, or other top-level objects. Instead, it enables the generation of the data values INSIDE those objects.

Installation:

```bash
npm install @karmaniverous/json2tf
```

Usage:

```ts
import { json2tf } from '@karmaniverous/json2tf';

const json = {
  a: 1,
  b: 'two',
  c: {
    x: 7,
    y: 'eight',
    z: [42, 69, 'one million dollars'],
  },
};

console.log(json2tf(json));
```

---

See more great templates and other tools on
[my GitHub Profile](https://github.com/karmaniverous)!
