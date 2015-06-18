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
				var li = $('<li></li>');

				li.html('<p>\
					<input type="checkbox" class="input-checkbox" name="done" value="'+data.id+'">\
					<span class="nome_task">'+data.task+'</span>\
					<a href="#" id="'+data.id+'">x</a>\
					<span class="data_task">'+data.dt_create+'</span>\
					</p>');
					
				$('.tasks').not('.complete').append(li);

				$('.total_tasks').html(data.total);
				$('.pendente_tasks').html(data.pendente);
				$('.completo_tasks').html(data.completo);

				console.log('Task Inserida');
			}
		});
	};
})(Todo);