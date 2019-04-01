function move() {
	let elem = document.getElementById('myBar');
	let width = 0;
	let id = setInterval(frame, 0);
	let random = 10 + Math.ceil(Math.random() * 90);
	function frame() {
		if (width >= random) {
			clearInterval(id);
		} else {
			width++;
			elem.style.width = width + '%';
			document.getElementById('label').innerHTML = width + '%';
		}
	}
}
