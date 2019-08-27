const index = require("./enter");

//Verifica la extención del archivo
console.log(index.extArch("./README.md"));

//Verifica de que el archivo existe
console.log(index.existentFile());

//Lee el contenido del archivo
console.log(index.seeFile("./readme.md", (data)=>{console.log(data.toString())}));

//Lee archivos del Path
console.log(index.seePath("/home/laboratoria-184/Documentos/Laboratoria/GDL003-social-network",(date)=>{console.log(date.toString())}))

//Sustrae los links
//console.log(index.searchLink("./readme.md", (data)=>{console.log(data.toString())}));
console.log(index.searchLink("./readme.md", (data)=>{console.log(data.toString())}))

//index.caliz()