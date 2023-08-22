process.stdout.write('Welcome to Holberton School, what is your name\n');
process.stdin.on('readable', () => {
  const nam = process.stdin.read();
  if (nam !== null) {
    process.stdout.write(`Your name is: ${nam}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
