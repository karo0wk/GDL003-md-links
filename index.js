const enter = require("./enter");
const validLinks = require("./validLinks")

/*
//Verifica la extención del archivo
console.log(enter.extArch("./README.md"));

//Verifica de que el archivo existe
console.log(enter.existentFile());

//Lee el contenido del archivo
console.log(enter.seeFile("./readme.md", (data)=>{console.log(data.toString())}));

//Lee archivos del Path
console.log(enter.seePath("/home/laboratoria-184/Documentos/Laboratoria/GDL003-social-network",(date)=>{console.log(date.toString())}))

//Sustrae los links
//console.log(index.searchLink("./readme.md", (data)=>{console.log(data.toString())}));
enter.searchLink("./readme.md", (data)=> {
    console.log(data.toString().match(/(http|ftp|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?/g))
})



//enter.caliz()
*/
console.log(validLinks.validateLinks())