;(function(Todo){
	Todo.TaskManager = function(taskInput){
		this.taskInput = taskInput;
		this.validateDate(this.taskInput.value);
	};

	Todo.TaskManager.prototype.validateDate = function(title){
		if(title != "" && title != " "){
			var task = new Todo.Task({
				description: title,
				status: 'pendente'
			});
			
			this.taskInput.value = "";
		}
	}
})(Todo);