const mdLinks = require('../');


describe('mdLinks', () => {

  it('should return the for a valid .md file', () => {
    expect(mdLinks.extArch('../README.md')).toBe(true);
  });

});

describe('mdLinks', () =>{
  it('shoud return a situated directory', () => {
    expect(mdLinks.existentFile()).toBe(Array)
  })
});
/*
describe('mdLinks', () => {

  it('should return a valid http file', () => {
    expect(mdLinks('../README.md')).toBe(true);
  });

});
*/