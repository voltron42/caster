App = (function(){
	var copy = function(args) {
		var out = [];
		for (var x = 0; x < args.length; x++) {
			out.push(args[x]);
		}
		return out;
	}
	var scope = {};
	var constructs = {
		DOM:function() {
			scope.DOM = {};
			copy(arguments).forEach(function(arg) {
				scope.DOM[arg] = document.getElementById(arg);
			})
		}
	}
	var app = {};
	var toLaunch = function() {
		var args = copy(arguments);
		app.fn = args.pop();
		app.deps = args;
	}
	var launch = function(config) {
		config = config || {};
		app.deps.forEach(function(dep){
			console.log("dep: " + dep);
			var argList = config[dep] || [];
			console.log("argList: " + argList);
			constructs[dep].apply(null, argList);
		})
		var deps = app.deps.map(function(dep) {
			return scope[dep];
		})
		console.log("deps: " + deps);
		app.fn.apply(null, deps);
	}
	return {
		launch:launch,
		toLaunch:toLaunch
	}
})()