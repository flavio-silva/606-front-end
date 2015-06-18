;(function(Todo){
	Todo.TaskInput = function(html){
		this.html = html;
		this.addEventListeners();
	}

	Todo.TaskInput.prototype.addEventListeners = function() {
		this.html.addEventListener('keydown', function(event){
			if((event.keyCode || event.which) !== 13){
				return true;
			}
			event.preventDefault();
			event.stopPropagation();

			this.taskManager = new Todo.TaskManager(this);
		});
	};
})(Todo);