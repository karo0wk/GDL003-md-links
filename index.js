const index = require("./enter");

console.log(index.extArch("./README.js"));
console.log(index.existentFile());
console.log(index.seeFile("./readme.md", (data)=>{console.log(data)}));


//  let see = index.seeFile('/carmaba.txt');
//  console.log(see)