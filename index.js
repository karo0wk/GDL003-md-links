
const path = require('path');
var fs = require("fs");

// const liga = RegExp("http*");

module.exports = { 
extArch: (filePath) => 

      {
    if (path.extname(filePath)=== '.md'){
        return true;
      }
    else
    {
        return false;
    }
      }
};



module.exports = {
  existentFile: () => 
    {
      fs.stat('README.md', function(err) {
        if (err == null) {
          console.log("El archivo existe");
        } else if (err.code == 'ENOENT') {
          console.log("el archivo no existe");
        } else {
          console.log(err); // ocurrió algún error
        }
      });
    }
}




// module.exports = (fileUrl) => liga.text(fileUrl)=== 'http';