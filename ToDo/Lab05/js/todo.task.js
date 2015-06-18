;(function(Todo){
	Todo.Task = function(attributes){
		this.insertTask(attributes);
	};

	Todo.Task.prototype.insertTask = function(data){
		var li = $('<li></li>');
		li.html('<p>\
			<input type="checkbox" name="done">\
			'+data.description+'\
			<a href="#">x</a>\
			</p>');

		var list = $('.tasks').not('.complete');
		list.append(li);
	};
})(Todo);