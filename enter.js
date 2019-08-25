
const path = require('path');
var fs = require("fs");

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
    }


};
