// Output a prompt
process.stdout.write('prompt > ');

// practice example
// The stdin 'data' event fires after a user types in a line
// process.stdin.on('data', data => {
//   const cmd = data.toString().trim(); // remove the newline

//   process.stdout.write('You typed: ' + cmd);
//   process.stdout.write('\nprompt > ');
// });

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', data => {
  const cmd = data.toString().trim(); // remove the newline
  let pwd;
  if (cmd === 'pwd') {
    pwd = process.cwd();
  }

  process.stdout.write(pwd);
  process.stdout.write('\nprompt > ');
});
