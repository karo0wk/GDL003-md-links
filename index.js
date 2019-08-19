
const path = require('path');

// const liga = RegExp("http*");

module.exports = (filePath) => {
if (path.extname(filePath)=== '.md'){
    return true;
}
else{
    return false;
}
};


// module.exports = (fileUrl) => liga.text(fileUrl)=== 'http';