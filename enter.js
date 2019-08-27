
const path = require('path');
var fs = require("fs");
regex = /(http|ftp|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?/g
dir = "./Documentos/Laboratoria/GDL003-social-network"


module.exports = { 


extArch : (filePath)=> {
  return path.extname(filePath)===".md";
  },


existentFile: () => 
    {
      fs.stat('index.js', function(err) {
        if (err == null) {
          console.log("El archivo existe");
        } else if (err.code == 'ENOENT') {
          console.log("el archivo no existe");
        } else {
          console.log(err); // ocurrió algún error
        }
      });
    },



  seeFile: (fileP, callback ) =>
    {
      fs.readFile(fileP, (error, data)=>{
        if(error){
          throw error;
        }
        callback(data);
      });
    },


    seePath: (fileP, callback ) =>
    {
      fs.readdir(fileP, (error, date)=>{
        if(error){
          console.log(error);
        }
        callback(date);
      });
    },
//(http|ftp|https)://([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?
searchLink:()=>{
  (fileP, callback ) =>
    {
      fs.readFile(fileP, (error, data)=>{
        if(error){
          throw error;
        }
        callback(data)
        var string = data 
        var result = string.match(/(http|ftp|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?/g); 
        console.log("Output : " + result); 
        //callback(data.match(/(http|ftp|https)://([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?/g)
    
      });
    }
},


/*
searchLink:()=>{
var str = "./readme.md";
var patt = new RegExp("(http|ftp|https)://([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?)");
var res = patt.exec(str)
console.log(res)
}
*/
/*
caliz: ()=> { 
  var string = "Acerca de Node.js - Documentación oficial](https://nodejs.org/es/about/)"; 
  var result = string.match(/(http|ftp|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?/g); 
  console.log("Output : " + result); 
} 
*/

};
