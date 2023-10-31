const fs = require("fs");
import { exec } from "node:child_process";

export const execInScreen = (screenName: string, cmd: string, retry = 0) => {
  const config = `logfile src/logs/${screenName}.log
  logfile flush 1
  logtstamp on
  logtstamp after 1
  logtstamp string "[ %t: %Y-%m-%d %c:%s ]\\012"
  log on`;
  fs.writeFileSync(`src/logs/${screenName}.conf`, config);
  if (retry === 0) {
    fs.writeFileSync(`src/logs/${screenName}.sh`, cmd);
  } else {
    fs.writeFileSync(`src/logs/${screenName}_main.sh`, cmd);
    fs.writeFileSync(`src/logs/${screenName}.sh`, `forever -m ${retry} -f --spinSleepTime 100 -c sh src/logs/${screenName}_main.sh`);
  }
  return execShell(`screen -S ${screenName} -c src/logs/${screenName}.conf -dmSL sh src/logs/${screenName}.sh`);
};

const execShell = async (cmd: string, debug = true) => {
  if (debug) console.info(cmd);
  return new Promise((resolve, reject) => {
    exec(
      cmd,
      {
        maxBuffer: 2000 * 1024,
      },
      (err: unknown, stdout, stderr) => {
        if (err) {
          const stderr_str = stderr.toString();
          if (stderr.length) console.error("error", { err, stdout: stdout.toString(), stderr: stderr_str });
          // reject({err, stdout: stdout.toString(), stderr: stderr.toString()});
        }
        resolve({ err, stdout: stdout.toString(), stderr: stderr.toString() });
      }
    );
  });
};
