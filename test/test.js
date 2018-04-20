const assert = require('assert')
const { toSeconds, toClockTime } = require('../lib/index')

describe('toSeconds', function() {
  const tests = [
    { args: { hours: 12, minutes: 0, meridiem: 'AM' }, expected: 0 },
    { args: { hours: 12, minutes: 0, meridiem: 'PM' }, expected: 43200 },
    { args: { hours: 3, minutes: 15, meridiem: 'AM' }, expected: 11700 },
    { args: { hours: 13, minutes: 5, meridiem: 'AM' }, expected: 47100 }
  ]
  tests.forEach(function(test) {
    it(`should convert ${
      test.args.hours
    }:${test.args.minutes} ${test.args.meridiem} to ${test.expected}`, function() {
      assert.equal(toSeconds(test.args), test.expected)
    })
  })
})

describe('toClockTime', function() {
  const tests = [
    { args: 0, expected: { hours: 12, minutes: 0, meridiem: 'AM' } },
    { args: 50700, expected: { hours: 2, minutes: 5, meridiem: 'PM' } },
    { args: 900, expected: { hours: 12, minutes: 15, meridiem: 'AM' } },
    { args: 43200, expected: { hours: 12, minutes: 0, meridiem: 'PM' } },
    { args: 86400, expected: { hours: 12, minutes: 0, meridiem: 'AM' } },
    { args: 86399, expected: { hours: 11, minutes: 59, meridiem: 'PM' } }
  ]
  tests.forEach(function(test) {
    it(`should convert ${
      test.args
    } to ${test.expected.hours} hours`, function() {
      assert.equal(toClockTime(test.args).hours, test.expected.hours)
    })

    it(`should convert ${
      test.args
    } to ${test.expected.minutes} minutes`, function() {
      assert.equal(toClockTime(test.args).minutes, test.expected.minutes)
    })

    it(`should convert ${
      test.args
    } to ${test.expected.meridiem} meridiem`, function() {
      assert.equal(toClockTime(test.args).meridiem, test.expected.meridiem)
    })
  })
})
