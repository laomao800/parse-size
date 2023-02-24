const parseSize = require('./')

describe('Default unit', () => {
  it('Default "px"', () => expect(parseSize(50)).toBe('50px'))
  it('Specify default unit', () => expect(parseSize(50, 'em')).toBe('50em'))
  it('Specify invalid unit', () => expect(parseSize(50, 'xxxx')).toBe('50px'))
})

describe('All valid unit', () => {
  it('"50" -> "50px"', () => expect(parseSize('50')).toBe('50px'))
  it('"50px" -> "50px"', () => expect(parseSize('50px')).toBe('50px'))
  it('"50%" -> "50%"', () => expect(parseSize('50%')).toBe('50%'))
  it('"50.5px" -> "50.5px"', () => expect(parseSize('50.5px')).toBe('50.5px'))
  it('"50.5%" -> "50.5%"', () => expect(parseSize('50.5%')).toBe('50.5%'))

  it('"-50" -> "-50px"', () => expect(parseSize('-50')).toBe('-50px'))
  it('"-50px" -> "-50px"', () => expect(parseSize('-50px')).toBe('-50px'))
  it('"-50%" -> "-50%"', () => expect(parseSize('-50%')).toBe('-50%'))
  it('"-50.5px" -> "-50.5px"', () => expect(parseSize('-50.5px')).toBe('-50.5px'))
  it('"-50.5%" -> "-50.5%"', () => expect(parseSize('-50.5%')).toBe('-50.5%'))
})

describe('Invalid parse', () => {
  it('"a" -> undefined', () => expect(parseSize('a')).toBe(undefined))
  it('null -> undefined', () => expect(parseSize(null)).toBe(undefined))
  it('[] -> undefined', () => expect(parseSize([])).toBe(undefined))
  it('{} -> undefined', () => expect(parseSize({})).toBe(undefined))
})
