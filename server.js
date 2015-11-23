var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [{
	id: 1,
	description: 'go to the grocery store',
	completed: false
},{
	id: 2,
	description: 'call tua sorella',
	completed: false
},{
	id: 3,
	description: 'call tua mamma',
	completed: true
}];

app.get('/', function (req, res) {
	res.send('Todo API Root');
});


app.get('/todos', function (req, res) {
	res.json(todos);
});


app.get('/todos/:id', function (req,res) {
	var todoId = parseInt(req.params.id, 10);
	var matchedTodo;

	for (var i = todos.length - 1; i >= 0; i--) {
		if (todos[i].id === todoId){
			matchedTodo = todos[i];
		}
	};
	
	if (matchedTodo) {
		res.json(matchedTodo);
	} else {
		res.status(404).send('The id ' + req.params.id + ' has not been found');
	};
	// res.send('Asking for todos with id of ' + req.params.id);
});


app.listen(PORT, function () {
	console.log('Express listening on port ' + PORT);
});