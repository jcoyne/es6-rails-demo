import CrowdWaver from 'crowd_waver';

export default class {
  constructor(name) {
    this.name = name;
  }

  sayHello() {
    c = new CrowdWaver();
    c.wave();
    alert(`Hello to everyone at ${this.name}`);
  }
}
