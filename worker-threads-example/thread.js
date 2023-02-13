const { Worker, isMainThread, workerData } = require("worker_threads");

if (isMainThread) {
  new Worker(__filename, {
    workerData: [9, 0, 3, 4, 2, 6, 1],
  });
  new Worker(__filename, {
    workerData: [3, 4, 2, 6, 5, 9, 0],
  });
} else {
  console.log("Worker in progress on process: " + process.pid);
  console.log(workerData + " is sorted as " + workerData.sort());
}
