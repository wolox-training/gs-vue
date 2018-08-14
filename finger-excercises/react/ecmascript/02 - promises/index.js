// Hint: use setInterval, create a new Promise and measure time with Date.now()

export function delay(time) {
  const delayPromise = new Promise((resolve, reject) => {
    const startTime = Date.now();
    let endTime = Date.now();
    while ((startTime + time) >= endTime && (endTime - startTime) < 1000) {
      endTime = Date.now();
    }
    if ((endTime - startTime) < time) {
      return reject(new Error('This time is too much !'));
    }

    return resolve(endTime - startTime);
  });
  return delayPromise;
}

export function asyncDelay(time) {
  const startTime = Date.now();
  let endTime = Date.now();
  while ((startTime + time) >= endTime) {
    endTime = Date.now();
  }
  return (endTime - startTime);
}
