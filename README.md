The hello_world.es6 source is compiled into es5 at this url:
http://localhost:3000/assets/application.js

You can interact with it at the javascript console:

```js
pkg = require('hello_world')

hi = new pkg.HelloWorld('Bob')
hi.sayName();
```
