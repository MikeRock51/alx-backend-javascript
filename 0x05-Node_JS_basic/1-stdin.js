console.log('Welcome to Holberton School, what is your name?');
process.stdin.on('readable', () => {
  const nam = process.stdin.read();
  if (nam !== null) {
    console.log(`Your name is: ${nam.toString().trim()}`);
  }
});

process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
