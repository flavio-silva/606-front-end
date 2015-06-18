;(function(Todo){
	Todo.TaskInput = function(html){
		this.html = html;

		this.addEventListners();
	};

	Todo.TaskInput.prototype.addEventListners = function(){
		this.html.on('keydown', function(event) {
			if( (event.keyCode || event.which) !== 13){
				return true;
			}
			event.preventDefault();
			event.stopPropagation();

			this.taskManager = new Todo.TaskManager(this);
		});
	}
})(Todo);