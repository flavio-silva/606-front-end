;(function(Todo){
	Todo.Loader = function(loading, page, listas){
		this.loading = loading;
		this.page = page;
		this.listas = listas;
		this.resource = null;
	};

	Todo.Loader.prototype.init = function(){
		this.loading.addClass('hidden');
		this.page.removeClass('hidden');
	}

	Todo.Loader.prototype.requestData = function(){
		$.ajax({
			url: 'http://marianalino.com.br/webservice/',
			dataType: 'JSON',
			success: function(data){
				if(data.length > 0){
					for(var i=0; i<data.length; i++){
						var li = $('<li></li>');

						if(data[i].status == "pendente"){
							li.html('<p>\
								<input type="checkbox" class="input-checkbox" name="done" value="'+data[i].id+'">\
								<span class="nome_task">'+data[i].task+'</span>\
								<a href="#" id="'+data[i].id+'">x</a>\
								<span class="data_task">'+data[i].dt_create+'</span>\
								</p>');
						
							$('.tasks').not('.complete').append(li);
						}else{
							li.html('<p>\
								<input type="checkbox" class="input-checkbox" name="done" value="'+data[i].id+'" checked="true" disabled="disabled">\
								<span class="nome_task">'+data[i].task+'</span>\
								<a href="#" id="'+data[i].id+'">x</a>\
								<span class="data_task">'+data[i].dt_updated+'</span>\
								</p>');

							$('ul:eq(1)').append(li);
						}
					}
				
					$('.total_tasks').html(data[0].total);
					$('.pendente_tasks').html(data[0].pendente);
					$('.completo_tasks').html(data[0].completo);
				} else{
					console.log("Nenhuma task encontrada");
				}
			},
			complete: function(){
				console.log("Terminou a requisição ao server");
			}
		});
	}
})(Todo);