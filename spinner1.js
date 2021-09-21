process.stdout.write('hello from spinner1.js... \rheyyy\n');

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 100);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 500);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 1000);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   '); 
}, 1700);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 2200);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 2500);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 3000);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   '); 
}, 3500);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 4000);

