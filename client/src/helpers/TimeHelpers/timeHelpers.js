export function timeInMinutes(time) {
  return time.hour * 60 + time.minute;
}

export function durationInMinutes(startTime, endTime) {
  return timeInMinutes(endTime) - timeInMinutes(startTime);
}

export function splitTimeFromString(timeString) {
  const startTime = timeString.split(':');
  return { hour: parseInt(startTime[0]), minute: parseInt(startTime[1]) };
}

export function stringTimeFromObject(timeObject) {
  const hours =
    timeObject.hour >= 10 ? timeObject.hour.toString() : '0' + timeObject.hour.toString();
  const minutes =
    timeObject.minute >= 10 ? timeObject.minute.toString() : '0' + timeObject.minute.toString();
  return hours + ':' + minutes;
}
