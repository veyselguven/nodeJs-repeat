const url = require("url");

const address = "http://sadikturan.com/kurslar?year=2019&month=nisan";

let result = url.parse(address, true);

console.log("result=>", result);
/* 

 Url {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'sadikturan.com',
  port: null,
  hostname: 'sadikturan.com',
  hash: null,
  search: '?year=2019&month=nisan',
  query: [Object: null prototype] { year: '2019', month: 'nisan' },
  pathname: '/kurslar',
  path: '/kurslar?year=2019&month=nisan',
  href: 'http://sadikturan.com/kurslar?year=2019&month=nisan'
}
*/

console.log(result.path); // /kurslar?year=2019&month=nisan
console.log(result.query.year); // 2019
console.log(result.hostname); // sadikturan.com
console.log(result.path); // /kurslar?year=2019&month=nisan
