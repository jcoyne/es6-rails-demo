import Cow from 'cow';

class HelloWorld {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    c = new Cow();
    c.moo();
    alert(this.name);
  }
}
