// Output a prompt
process.stdout.write('prompt > ');

// practice example
// The stdin 'data' event fires after a user types in a line
// process.stdin.on('data', data => {
//   const cmd = data.toString().trim(); // remove the newline

//   process.stdout.write('You typed: ' + cmd);
//   process.stdout.write('\nprompt > ');
// });

const pwd = require(`./pwd`);
const ls = require(`./ls`);
const cat = require(`./cat`);
