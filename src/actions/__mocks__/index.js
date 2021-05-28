module.exports = {
  ...jest.requireActual('..'),
  __esModule: true,
  //Tod: update the return value for Redux /context implementation
  getSecretWord: jest.fn().mockReturnValue(Promise.resolve('party')),
};
