const express = require("express");
const app = express();
const cluster = require("cluster");
const os = require("os");

const numOfCPUs = os.cpus().length;
app.get("/", (req, res) => {
  for (let i = 0; i < 1e8; i++) {
    // something running
  }
  res.send(`Ok.... Worker: ${process.pid}`);
  // cluster.worker.kill();
});

// if (cluster.isPrimary) {
//   cluster.schedulingPolicy = cluster.SCHED_RR;
//   for (let i = 0; i < numOfCPUs; i++) {
//     cluster.fork();
//   }

//   cluster.on("exit", (worker, ocde, signal) => {
//     console.log(`Worker ${worker.process.pid} died`);
//     cluster.fork();
//   });
// } else {
//   app.listen(3000, () => {
//     console.log(
//       `Server ${process.pid} on platform ${os.platform} started at http://localhost:3000`
//     );
//   });
// }
app.listen(3000, () => {
  console.log(
    `Server ${process.pid} on platform ${os.platform} started at http://localhost:3000`
  );
});
