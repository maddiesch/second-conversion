/* @flow */

const SECONDS_PER_DAY = 86400

type ClockTime = {
  hours: number,
  minutes: number,
  meridiem: string
}

/**
 * Converts a Clock Time object into seconds
 */
const toSeconds = (object: ClockTime): number => {
  let { hours, minutes, meridiem } = object

  if (hours === 12 && meridiem === 'AM') {
    hours = 0
  }
  if (hours !== 12 && meridiem === 'PM') {
    hours += 12
  }
  return hours * 60 * 60 + minutes * 60
}

/**
 * Converts ClockTime into seconds
 */
const toClockTime = (seconds: number): ClockTime => {
  seconds = Number(seconds) % SECONDS_PER_DAY
  let hours = Math.floor(seconds / 60 / 60)
  const minutes = Math.floor((seconds - hours * 60 * 60) / 60)
  if (hours === 0) {
    hours = 12
  } else if (hours !== 12) {
    hours = hours % 12
  }
  const meridiem = seconds < SECONDS_PER_DAY / 2 ? 'AM' : 'PM'
  return {
    hours,
    minutes,
    meridiem
  }
}

module.exports = {
  toSeconds,
  toClockTime
}
