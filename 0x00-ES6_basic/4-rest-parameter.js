export default function returnHowManyArguments(...args) {
  let num = 0;
  while (args[num]) {
    num += 1;
  }
  return num;
}
