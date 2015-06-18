/**
* title: ToDoList with HTML5 and JS
* author: Mariana Lino
* file: todo.js
*/
;(function(){
	var Todo;
	window.Todo = Todo = {};

	Todo.init = function(html){
		this.html = html;

		this.loader = new Todo.Loader(
			this.html.querySelector(".loading"),
			this.html.querySelector(".page")
		);

		this.loader.init();
	}
}).call();