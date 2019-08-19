const mdLinks = require('../');


describe('mdLinks', () => {

  it('should return the for a valid .md file', () => {
    expect(mdLinks('../README.md')).toBe(true);
  });

});
/*
describe('mdLinks', () => {

  it('should return a valid http file', () => {
    expect(mdLinks('../README.md')).toBe(true);
  });

});
*/