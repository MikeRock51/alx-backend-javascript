export default function getResponseFromAPI() {
  const prom = new Promise((resolve) => {
    resolve('Yay!!');
  });
  return prom;
}
