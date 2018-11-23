// Instancier un objet de la classe Hello
/*
const frenchHello = new HelloFr();
const deutscheusHello = new HelloDe();

frenchHello.setQui('tout le monde');
deutscheusHello.setQui('Markus');

frenchHello.sayHello();
deutscheusHello.sayHello();
*/

const _007 = (new User())
    .setName('Bond')
    .setForname('James')
    .setCountry('fr');
const sayHelloToBond = (new HelloFactory(_007)).getHelloInstance();

const kurt = (new User())
    .setName('Einstein')
    .setForname('Franck')
    .setCountry('de');
const sayHelloToFk = (new HelloFactory(kurt)).getHelloInstance();

const felix = new Cat('Felix');
const sayMiaou = (new HelloFactory(felix)).getHelloInstance();

sayHelloToFk.sayHello();
sayHelloToBond.sayHello();
sayMiaou.sayHello();