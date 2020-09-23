const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minsEl = document.getElementById('mins')
const secondsEl = document.getElementById('seconds')

const queensBirthday = '19 Apr 2021'

function countdown () {
  const queensBirthdayDate = new Date(queensBirthday)
  const currentDate = new Date()

  const totalSeconds = (queensBirthdayDate - currentDate) / 1000

  const days = Math.floor(totalSeconds / 3600 / 24)
  const hours = Math.floor(totalSeconds / 3600) % 24
  const minutes = Math.floor(totalSeconds / 60) % 60
  const seconds = Math.floor(totalSeconds) % 60

  daysEl.innerHTML = days
  hoursEl.innerHTML = hours
  minsEl.innerHTML = minutes
  secondsEl.innerHTML = seconds
}

function formatTime (time) {
  return time < 10 ? `0${time}` : time
}

countdown()

setInterval(countdown, 1000)
