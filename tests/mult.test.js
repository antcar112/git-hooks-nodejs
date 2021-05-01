const mult = require('../src/mult')

it('should multiple', () => {
  const result = mult(5, 4)
  expect(result).toBe(20)
})
