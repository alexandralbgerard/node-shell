const fs = require(`fs`);
module.export = process.stdin.on('data', data => {
  const cmd = data.toString().trim(); // remove the newline
  if (cmd.slice( 0, cmd.indexOf(` `)) === 'cat') {
    const file = cmd.slice( cmd.indexOf( ` `) + 1);
    fs.readFile( file, (err, data) => {
      if (err) throw err
    process.stdout.write( data);
    process.stdout.write( 'prompt > ');
    })
  }
})
