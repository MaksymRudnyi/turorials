var fs = require('fs');
var expressApp = global.app;
module.exports = expressRouter = function(){
	var appPath = __dirname + '/../..';
	var routePath = appPath + '/routes/';
	if (typeof arguments[0] === 'string' || arguments.length === 0){
		routePath = appPath + arguments[0] + '/';
		expressApp = expressApp || arguments[1];
	}else{
		expressApp = arguments[0];
	}
	var fileName = 'index.txt';
	expressRouter.process(fs.readFileSync(routePath + fileName, 'UTF-8'), routePath);
};
expressRouter.process = function (data, routePath) {
	expressRouter.routes = {};
	data = data.split('\n'); // split each line into an array of lines
	for (var i = 0, dataLength = data.length; i < dataLength; i++) {
		if (data[i].indexOf('//') && data[i].trim()) { // don't listen to commented lines
			var lineInfo = data[i].split(' '); // split line info into an array
			if (lineInfo.length !== 3){
				throw new Error('Invalid route syntax. Please write them this way: "method url middleware1,middleware2,...,middlewareN"');
			}
			var middlewares = lineInfo[2].split(','); // split route middlewares into an array
			var routes = []; // array of routes to apply for this line
			for (var j = 0, middlewaresLength = middlewares.length; j < middlewaresLength; j++) {
				var routeInfo = middlewares[j].split('.'); // split route into an array
				var route = expressRouter.routes[routeInfo[0]] = expressRouter.routes[routeInfo[0]] || require(routePath + routeInfo[0]); // load route module into expressRouter.routes and set route var with this module
				for (var k = 1; k < routeInfo.length; k++) {
					if (!route){
						throw new Error('Route specified could not be found.');
					}
					route = route[routeInfo[k]]; // set route one level deeper each time
				}
				routes.push(route);
			}
			expressApp[lineInfo[0].toLowerCase()](lineInfo[1], routes); // apply routes to application
		}
	}
};