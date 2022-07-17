//https://stackoverflow.com/questions/23450534/how-to-call-a-python-function-from-node-js

const { spawn } = require('child_process');
const pyProg = spawn('python', ['./run.py']);
pyProg.stdout.on('data', function(data) {

    console.log(data.toString());
})