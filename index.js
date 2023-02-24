'use strict'

var CSS_UNITS = [
  'em',
  'ex',
  '%',
  'px',
  'cm',
  'mm',
  'in',
  'pt',
  'pc',
  'ch',
  'rem',
  'vh',
  'vw',
  'vmin',
  'vmax',
]

var validReg = new RegExp(
  '^-?\\d+(.\\d+)?(' + CSS_UNITS.join('|') + ')$',
  'i'
)

module.exports = function (input, defaultUnit) {
  if (validReg.test(input)) return input

  var num = parseInt(input, 10)
  if (isNaN(num)) return undefined

  let unit = 'px'
  if (defaultUnit && CSS_UNITS.indexOf(defaultUnit) > -1) {
    unit = defaultUnit
  }
  return num + unit
}
