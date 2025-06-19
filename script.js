//your JS code here. If required.
const start = document.getElementById("btn");
const input = document.getElementById("number");
const output = document.getElementById("output");
start.addEventListener("click", async () => {
	await simple(input.value).then(res => {
		output.innerHTML = `Result: ${res}`;
		return multiplay(res);
	}).then(res => {
		output.innerHTML = `Result: ${res}`;
		return subtract(res);
	}).then(res => {
		output.innerHTML = `Result: ${res}`;
		return divied(res);
	}).then(res => {
		output.innerHTML = `Result: ${res}`;
		return fifth(res);
	}).then(res => {
		output.innerHTML = `Result: ${res}`;
	})
})

async function simple(val){
		return await new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(val);
			}, 2000);
		})
	}
async function multiplay(val){
		return await new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(val * 2);
			}, 2000);
		})
	}
async function subtract(val){
		return await new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(val - 3);
			}, 1000);
		})
	}
async function divied(val){
		return await new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(val / 2);
			}, 1000);
		})
	}
async function fifth(val){
		return await new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(val);
			}, 1000);
		})
	}