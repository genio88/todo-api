var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 3000;
// var todos = [{
// 	id: 1,
// 	description: 'go to the grocery store',
// 	completed: false
// },{
// 	id: 2,
// 	description: 'call tua sorella!',
// 	completed: false
// },{
// 	id: 3,
// 	description: 'call tua mamma',
// 	completed: true
// }];
var todos = [];
var todoNextId = 1;

app.use(bodyParser.json());



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

app.post('/todos', function (req, res) {
	var body = req.body;

	// ---- course solution ----
	body.id = todoNextId ++;
	todos.push(body);


	// ----- my solution -----
	// var todo = {
	// 	id: todoNextId,
	// 	description: body.description,
	// 	completed: body.completed
	// };

	// todos.push(todo),

	// todoNextId ++;

	console.log('description: ' + body.description);

	res.json(body);
});


app.listen(PORT, function () {
	console.log('Express listening on port ' + PORT);
});




