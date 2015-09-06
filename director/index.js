
function A()
{
	console.log('a')
}
function B()
{
	console.log('b')
}

var routes = {
	'/a': [A, B],
	'/b':B
}

var router = new Router(routes);
router.init();

router.on('/b/:id', function(id){
	console.log(id)
});
