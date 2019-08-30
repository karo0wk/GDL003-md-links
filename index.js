const enter = require("./enter");
const validLinks = require("./validLinks")


//Verifica la extención del archivo
// enter.extArch("./README.md");

//Verifica de que el archivo existe
// enter.existentFile();

//Lee el contenido del archivo
// enter.seeFile("./readme.md", (data)=>{console.log(data.toString())});

//Lee archivos del Path
// enter.seePath("/home/laboratoria-184/Documentos/Laboratoria/GDL003-social-network",(date)=>{console.log(date.toString())})

//Sustrae los links
// enter.searchLink("./readme.md", (data)=> {
    // console.log(data.toString().match(/(http|ftp|https):\/\/([\w_-]+(?:(?:\.[\w_-]+)+))([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?/g))
// })

//Valida los links
// enter.validateLinks("https://www.fundacion-affinity.org/perros-gatos-y-personas/tengo-un-animal-de-compania/los-12-consejos-para-llevarse-bien-con-un-gato");

/*
async function mdLinks (path) {
  try {
      const stats = await enter.existentFile(path);
      let result = null;
  


      if (stats === true) {
          const readDir = await enter.seePath(path);
         // const extMd = await enter.extArch(readDir);
        
          const readfile = await enter.seeFile(readDir)
          const getUrls = enter.searchLink(readfile);
          
          result = getUrls;
      } else {
          const readfile = await enter.seeFile(path);
          const getUrls = enter.searchLink(readfile);
          result = getUrls;
      }

      return result;
  } catch (err) {
      return err;
  }
}
mdLinks("home/laboratoria-184/Documentos/Laboratoria/GDL003-social-network/README.md");
*/