const ones = [
  '',
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
]

const teens = [
  'ten',
  'eleven',
  'twelve',
  'thirteen',
  'fourteen',
  'fifteen',
  'sixteen',
  'seventeen',
  'eighteen',
  'nineteen',
]

const tys = [
  '',
  '',
  'twenty',
  'thirty',
  'forty',
  'fifty',
  'sixty',
  'seventy',
  'eighty',
  'ninety',
]

module.exports = function toReadable(number) {
  let dozens = number.toString().charAt(1)
  let result = ''

  // the case for '0'
  if (number == 0) return 'zero'

  // the case from '1' to '9'
  if (number > 0 && number < 10) return ones[number]

  // the case from '10' to '19'
  if (number > 9 && number < 20) return teens[number - 10]

  // the case from '20' to '99'
  if (number > 19 && number < 100) {
    result = tys[Math.floor(number / 10)]
    result += ` ${ones[number % 10]}`
    return result.trim()
  }

  // the case for '100' and more
  if (number > 99) {
    result = ones[Math.floor(number / 100)]
    result += ' hundred '

    if (dozens == 0) result += ones[number % 100]
    if (dozens == 1) result += teens[(number % 100) - 10]
    if (dozens > 1) result += `${tys[dozens]} ${ones[number % 10]}`

    return result.trim()
  }
}
