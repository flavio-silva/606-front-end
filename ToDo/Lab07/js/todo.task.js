;(function(Todo){
	Todo.Task = function(attributes){
		this.insertTask(attributes);
	};

	Todo.Task.prototype.insertTask = function(task){
		$.ajax({
			url: "http://marianalino.com.br/webservice/",
			dataType: 'JSON',
			data: task,
			success: function(data){
				console.log("Task Inserida!!");
				console.log(data);
			}
		});
	};
})(Todo);