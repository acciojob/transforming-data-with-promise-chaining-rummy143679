//your JS code here. If required.
const start = document.getElementById("btn");
const input = document.getElementById("ip");
const output = document.getElementById("output");
start.addEventListener("click", () => {
	const value = parseInt(input.value)
	simple(value).then(res => {
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
		return addTen(res);
	}).then(res => {
		output.innerHTML = `Final Result: ${res}`;
	}).catch(e => console.log(e));
})

function simple(val){
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(val);
			}, 2000);
		})
	}
function multiplay(val){
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(val * 2);
			}, 2000);
		})
	}
function subtract(val){
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(val - 3);
			}, 1000);
		})
	}
function divied(val){
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(val / 2);
			}, 1000);
		})
	}
function addTen(val){
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(val + 10);
			}, 1000);
		})
	}