;(function(Todo){
	Todo.TaskInput = function(inputTask, html){
		this.inputTask = inputTask;
		this.html = html;

		this.addEventListeners();
		this.checkTask();
		this.deleteTask();
	};

	Todo.TaskInput.prototype.addEventListeners = function(){
		this.inputTask.on('keydown', function(event) {
			if( (event.keyCode || event.which) !== 13){
				return true;
			}
			event.preventDefault();
			event.stopPropagation();

			this.taskManager = new Todo.TaskManager(this);
		});
	}

	Todo.TaskInput.prototype.checkTask = function(){
		this.html.on('click', '.input-checkbox', function(){
			var that = $(this);

			var classList = that.parent().parent().parent().attr('class');

			if(classList == "tasks"){
				$.ajax({
					url: 'http://marianalino.com.br/webservice/',
					data: { id: that.val(), status: 'completo' },
					dataType: 'JSON',
					success: function(data){
						var li = $('<li></li>');
						li.html('<p>\
							<input type="checkbox" class="input-checkbox" name="done" value="'+data.id+'" checked="true" disabled="disabled">\
							<span class="nome_task">'+data.task+'</span>\
							<a href="#" id="'+data.id+'">x</a>\
							<span class="data_task">'+data.dt_updated+'</span>\
							</p>');

						$('ul:eq(1)').append(li);
						
						that.parent().parent().remove();

						$('.total_tasks').html(data.total);
						$('.pendente_tasks').html(data.pendente);
						$('.completo_tasks').html(data.completo);

						console.log("Task Concluída");
					}
				});
			}
		});
	}

	Todo.TaskInput.prototype.deleteTask = function(){
		this.html.on('click', 'a', function(){
			var that = $(this);

			var tarefa = that.parent().find('.nome_task').html();
			var item_tarefa = that.parent().parent();

			var confirma = confirm("Você tem certeza que deseja excluir a tarefa: "+ tarefa);
			if (confirma == true) {
				$.ajax({
					url: 'http://marianalino.com.br/webservice/',
					data: { id: that.attr('id'), status: 'excluir' },
					dataType: 'JSON',
					success: function(data){
						item_tarefa.remove();

						$('.total_tasks').html(data.total);
						$('.pendente_tasks').html(data.pendente);
						$('.completo_tasks').html(data.completo);

						console.log("Task Excluída");
					}
				});
			}

			return false;
			
		});
	}
})(Todo);