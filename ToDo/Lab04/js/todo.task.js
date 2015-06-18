;(function(Todo){
	Todo.Task = function(attributes){
		this.insertTask(attributes);
	};

	Todo.Task.prototype.insertTask = function(task){
		console.log(task);
	}
})(Todo);