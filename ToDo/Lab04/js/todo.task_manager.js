;(function(Todo){
	Todo.TaskManager = function(taskInput){
		this.taskInput = taskInput;
		this.validateData(this.taskInput.value);
	};

	Todo.TaskManager.prototype.validateData = function(title){
		if(title != "" && title != " "){
			var task = new Todo.Task({
				description: title,
				status: 'pendente'
			});

			this.taskInput.value = '';
		}
	}
})(Todo);