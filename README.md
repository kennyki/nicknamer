# nicknamer
Generates a nickname in the format of `${adjective} ${noun}`

# Install

```
npm i --save nicknamer
```

# Usage

The position of nicknames have been randomized on every generation, so the easiest way is to loop thru its list:

```
const nicknamer = require('nicknamer')

for (let i = 0, i < nicknamer.count; i++) {
  console.log(nicknamer.list[i])
}
```

Otherwise you may call the function `nicknamer.get()` for a random nickname:

```
const nicknamer = require('nicknamer')

console.log(nicknamer.get())
```
