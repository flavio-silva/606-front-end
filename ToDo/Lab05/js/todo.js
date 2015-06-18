/**
* title: ToDoList with HTML5 and JS
* author: Mariana Lino
* file: todo.js
*/
;(function(){
	var Todo;
	window.Todo = Todo = {};

	Todo.init = function(html){
		this.html = $(html);

		this.loader = new Todo.Loader(
			this.html.find(".loading"),
			this.html.find(".page")
		);

		this.taskInput = new Todo.TaskInput(
			this.html.find(".input-task")
		);

		this.loader.init();
	}
}).call();