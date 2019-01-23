export function timeInMinutes(time) {
  return time.hour * 60 + time.minute;
}

export function durationInMinutes(startTime, endTime) {
  return timeInMinutes(endTime) - timeInMinutes(startTime);
}
