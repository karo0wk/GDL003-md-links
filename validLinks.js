var fs = require("fs");
const http = require('http');
url = require('url');
const fetch = require('node-fetch');

// module.exports = {
 /*
    validateLinks: () =>{
        http.get('http://nodejs.org/api/http.html#http_class_http_clientrequest', (res) => {
        const { statusCode } = res;
        const contentType = res.headers['content-type'];
      
        let error;
        if (statusCode !== 200) {
          error = new Error('Request Failed.\n' +
                            `Status Code: ${statusCode}`);
        } else if (/(http|ftp|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?/g.test(contentType)) {
          error = new Error('Invalid content-type.\n' +
                            `Expected application/json but received ${contentType}`);
        }
        if (error) {
          console.error(error.message);
          // Consume response data to free up memory
          res.resume();
          return;
        }
      
        res.setEncoding('utf8');
        let rawData = '';
        res.on('data', (chunk) => { rawData += chunk; });
        res.on('end', () => {
          try {
            const parsedData = JSON.parse(rawData);
            console.log(parsedData);
          } catch (e) {
            console.error(e.message);
          }
        });
      }).on('error', (e) => {
        console.error(`Got error: ${e.message}`);
      });
      },
*/
/*
 
   checkUrlExists = function (Url, callback) {
    var options = {
        method: 'HEAD',
        host: url.parse(Url).host,
        port: 80,
        path: url.parse(Url).pathname
    };

    const req = http.request(options, function (r) {
  //fetch +.then
        callback( r.statusCode);
        console.log(r.status)
      });
    req.end();
    console.log(req)
}
*/ 
/*esta es la buena 
function statusUrl(link) {
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


console.log(statusUrl("https://www.fundacion-affinity.org/perros-gatos-y-personas/tengo-un-animal-de-compania/los-12-consejos-para-llevarse-bien-con-un-gato"))
*/
// ("./readme.md", (data)=>{console.log(data.toString())})
//console.log(checkUrlExists("https://www.fundacion-affinity.org/perros-gatos-y-personas/tengo-un-animal-de-compania/los-12-consejos-para-llevarse-bien-con-un-gato",(r)=>{console.log(r)}))


// fetch('https://github.com/')
//     .then(res => res.text())
//     .then(body => console.log(body));

