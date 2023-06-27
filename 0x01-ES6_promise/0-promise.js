export function getResponseFromAPI() {
	const prom = new Promise(function (resolve, reject) {
		resolve("Yay!");
	});
	return prom;
}
