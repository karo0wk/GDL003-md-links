
const path = require('path');
var fs = require("fs");
regex = /(http|ftp|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?/g
dir = "./Documentos/Laboratoria/GDL003-social-network"
const http = require('http');
const fetch = require('node-fetch');



module.exports = { 


extArch: (filePath)=> {
  return path.extname(filePath)===".md";
  
},


existentFile: () => 
    {
      fs.stat('index.js', (err) => {
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
          console.log(error)
        }
        return callback(data);
        
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
  searchLink: (fileP, callback) =>
      {
        fs.readFile(fileP, (error, data)=>{
          if(error){
            throw error;
          }
          callback(data)
        
          const http = require('http');
      });
    },


validateLinks: (link)=> {
    return new Promise(function(resolve, reject) {
        fetch(link)
            .then(res => {
                resolve(res.statusText); 
                console.log(res.statusText);
            })
            .catch((err) => {
                const error = err.code;
                if (error === 'ENOTFOUND') {
                    reject('fail');
                }
            });
      });
  }

}

