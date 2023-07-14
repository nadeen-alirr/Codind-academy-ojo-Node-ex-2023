
const { factorial } = require("./math.js");
const { name1, major1 } = require("./info.js");

console.log(factorial(5));
console.log(factorial(10));

console.log(name1);
console.log(major1);

const fs = require('fs');
const readline = require('readline');

async function main() {
  try {
    const filePath = 'input.txt';
    const outputFilePath = 'output.txt';

    if (!fs.existsSync(filePath)) {
      console.error(`File "${filePath}" does not exist.`);
      return;
    }

    const fileContent = await fs.promises.readFile(filePath, 'utf8');
    console.log(fileContent);

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    if (fs.existsSync(outputFilePath)) {
      const overwriteConfirmed = await confirmOverwrite(rl);

      if (!overwriteConfirmed) {
        console.log('Operation cancelled. File was not overwritten.');
        rl.close();
        return;
      }
    }

    rl.question('Do you want to proceed? (y/n) ', async (answer) => {
      if (answer.toLowerCase() === 'y') {
        await fs.promises.writeFile(outputFilePath, fileContent);
        console.log('File "output.txt" written successfully!');

        await fs.promises.unlink(filePath);
        console.log('File "input.txt" deleted successfully!');
      } else {
        console.log('Operation cancelled.');
      }

      rl.close();
    });
  } catch (error) {
    console.error(error);
  }
}

async function confirmOverwrite(rl) {
  return new Promise((resolve) => {
    rl.question('The "output.txt" file already exists. Do you want to overwrite it? (y/n) ', (answer) => {
      resolve(answer.toLowerCase() === 'y');
    });
  });
}

main();

// Node JS Task



//1
async function readFileContent(filePath1) {
  try {
    const fileContent = await fs.promises.readFile(filePath1, 'utf8');
    console.log(`Contents of file "${filePath1}":`);
    console.log(fileContent);
  } catch (error) {
    console.error(`Error reading file "${filePath1}": ${error}`);
  }
}

const filePath1 = './fileex1.txt';
readFileContent(filePath1);

//2
async function writeFileContent(filePath, content) {
    try {
      await fs.promises.writeFile(filePath, content, 'utf8');
      console.log(`File "${filePath}" written successfully.`);
    } catch (err) {
      console.error(`Error writing to file "${filePath}": ${err}`);
    }
  }
  
  const filePath3 = 'fileexc2.txt';
  const content = 'love you tooo';
  writeFileContent(filePath3, content);

//3
  const http = require('http');
  const server3 = http.createServer((req,res)=>{
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Hello, World!');
      } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
      }
  });
  const port3='3002';
  server3.listen(port3, () => {
    console.log(`Server listening on port ${port}`);
  });

  //4
  

  const server2 = http.createServer((req, res) => {
    if (req.url === '/file') {
      const filePath2 = './fileex1.txt';
  
      fs.readFile(filePath2, 'utf8', (err, data) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('Internal Server Error');
          return;
        }
  
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(data);
      });
    } else {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
    }
  });
  
  const port2 = 3003;
  server2.listen(port2, () => {
    console.log(`Server listening on port ${port2}`);
  });

  
  //5
  const path = require('path');

  const filePath4 = "./fileex1.txt";
const filePath5 = "./fileexc2.txt";
const joinedPath = path.join("the joind:"+filePath4, filePath5);

console.log(joinedPath);

//6
const url = require('url');

const urlString = 'http://www.example.com:8080/path?query=value#fragment.';

const parsedUrl = new URL(urlString);

const result = {
  protocol: parsedUrl.protocol,
  host: parsedUrl.host,
  pathname: parsedUrl.pathname,
  search: parsedUrl.search,
  hash: parsedUrl.hash
};

console.log(result);

//7
const os = require('os');

const homeDirectory = os.homedir();

console.log("home dir"+homeDirectory);

//8

const crypto = require('crypto');

function generateRandomNumber() {
  const randomBytes = crypto.randomBytes(6);
  const randomNumber = randomBytes.readUInt32BE(0);

  return randomNumber;
}

const randomNum = generateRandomNumber();
console.log("the random number:"+randomNum);

// 9


const inputString = 'Hello, World!';
const hash = crypto.createHash('sha256');

hash.update(inputString);
const hashDigest = hash.digest('hex');

console.log(`Hash of "${inputString}": ${hashDigest}`);
//10

const querystring = require('querystring');

const queryString = 'name=value&key=value2';
const parsedQuery = querystring.parse(queryString);

console.log(parsedQuery);
//11

const { exec } = require('child_process');
const command = 'ls -l';
exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout:\n${stdout}`);
  });


  //12
  const { spawn } = require('child_process');
  function spawnProcess(command, args) {
    const childProcess = spawn(command, args);
  
    childProcess.stdout.on('data', (data) => {
      console.log(data.toString());
    });
  
    childProcess.stderr.on('data', (data) => {
      console.error(data.toString());
    });
  
    childProcess.on('close', (code) => {
      console.log(`Child process exited with code ${code}`);
    });
  }
  
  const command1 = 'ping';
  const args = ['www.google.com'];
  
  spawnProcess(command1, args);


  //13
//   const cluster = require('cluster');

// if (cluster.isMaster) {
//   const numWorkers = os.cpus().length;

//   console.log(`Master process is running with ${numWorkers} workers.`);

//   // Fork workers
//   for (let i = 0; i < numWorkers; i++) {
//     cluster.fork();
//   }

 
//   cluster.on('exit', (worker, code, signal) => {
//     console.log(`Worker process ${worker.process.pid} exited with code ${code} and signal ${signal}`);
  
//     cluster.fork();
//   });
// } else {
//   // Worker process
//   console.log(`Worker process ${cluster.worker.process.pid} is running.`);
//   // Implement your worker logic here, such as creating a server
// }

//14
const dns = require('dns');

const hostname = 'www.google.com';

dns.resolve4(hostname, (err, addresses) => {
  if (err) {
    console.error(`Error resolving ${hostname}: ${err.message}`);
    return;
  }

  console.log(`IP addresses for ${hostname}:`);
  addresses.forEach((address) => {
    console.log(address);
  });
});

//15
const net = require('net');

const server = net.createServer((socket) => {
  console.log('Client connected');

  socket.on('data', (data) => {
    console.log(`Received data: ${data}`);
    socket.write('Hello from server!');
  });

  socket.on('end', () => {
    console.log('Client disconnected');
  });
});

const port = 3000;

server.listen(port, () => {
  console.log(`TCP server listening on port ${port}`);
});

//16



const client = net.createConnection({ port: 3000 }, () => {
  console.log('Connected to server!');
});

client.on('data', (data) => {
  console.log(`Received data from server: ${data}`);
  client.end();
});

client.on('end', () => {
  console.log('Disconnected from server');
});

client.on('error', (error) => {
  console.error('An error occurred:', error);
});



// basics
//1
console.log("Hello, World!");



//2
console.log(process.argv);


//3
setTimeout(() => {
    console.log("Hello, World!");
  }, 7000);


  //4
  setInterval(() => {
    console.log("Hello, World!");
  }, 2000);


  //5
  console.warn("Warning: Something went wrong");

  //6

