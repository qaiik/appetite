# appetite
array eater

```js
const fmt = Array.from(new TextEncoder().encode("\x18thomas\x00"))

const p = new Plate(fmt)
const age = p.int8() //24
const name = p.string() //thomas
```
