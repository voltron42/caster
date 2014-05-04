App.toLaunch('DOM',function(dom) {
	dom.console.innerHTML = "Hello World\n\n";
	var count = '01234567'.split('').map(Number);
	var constant = {
		x:'sin',
		y:'cos'
	};
	var points = count.map(function(num){
		var point = {};
		Object.keys(constant).forEach(function(axis){
			point[axis] = Math[constant[axis]](Math.PI * num * 0.75 * 50 + 50);
		});
		return point;
	});
	dom.console.innerHTML += JSON.stringify(points) + '\n\n';
})