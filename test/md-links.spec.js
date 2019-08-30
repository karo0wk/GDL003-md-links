const mdLinks = require('../enter');
const index = ('../index');

describe('extArch', () => {

  it('should return the for a valid .md file', () => {
    expect(mdLinks.extArch('../README.md')).toBe(true);
  });

});

describe('seeFile', ()=>{
  it('is a function', () =>{
    expect(typeof mdLinks.seeFile).toBe('function');
  });
 
  it('should read and impress what is in the .md file', () =>{
    mdLinks.seeFile('../example.md', (date)=>{
      expect(date).toBe(undefined)
    });
  });
 });


 describe('seePath', ()=>{
  it('is a function', () =>{
    expect(typeof mdLinks.seePath).toBe('function');
  });
 
  it('should read and impress what is in the .md file', () =>{
    mdLinks.seePath('../example.md', (date)=>{
      expect(date).toBe(undefined)
    });
  });
 });

 describe('searchLink', ()=>{
  it('is a function', () =>{
    expect(typeof mdLinks.searchLink).toBe('function');
  });
 
  it('should read and impress what is in the .md file', () =>{
    mdLinks.searchLink('../example.md', (data)=>{
      expect(data).toBe(undefined)
    });
  });
 });


 describe('validateLinks', ()=>{
  it('is a function', () =>{
    expect(typeof mdLinks.validateLinks).toBe('function');
  });
 
  it('should read and impress what is in the .md file', () =>{
    mdLinks.validateLinks('https://www.google.com.mx/?hl=es-419', (data)=>{
      expect(data).toBe(undefined)
    });
  });
 });



/*
describe('mdLinks', () => {

  it('should return a valid http file', () => {
    expect(mdLinks('../README.md')).toBe(true);
  });

});
*/