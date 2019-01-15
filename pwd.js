// The stdin 'data' event fires after a user types in a line
module.export = process.stdin.on('data', data => {
  const cmd = data.toString().trim(); // remove the newline
  let pwd;
  if (cmd === 'pwd') {
    pwd = process.cwd();
    process.stdout.write(pwd);
    process.stdout.write('\nprompt > ');
  }

});
