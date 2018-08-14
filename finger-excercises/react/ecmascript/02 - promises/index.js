// Hint: use setInterval, create a new Promise and measure time with Date.now()

export function delay(time) {
  const delayPromise = new Promise((resolve) => {
    const startTime = Date.now();
    let endTime = Date.now();
    while (startTime + time > endTime) {
      endTime = Date.now();
    }
    return resolve(endTime - startTime);
  });
  return delayPromise;
}

export function asyncDelay() {

}
