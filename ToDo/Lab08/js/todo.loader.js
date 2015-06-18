;(function(Todo){
	Todo.Loader = function(loading, page){
		this.loading = loading;
		this.page = page;
		this.resource = null;
	};

	Todo.Loader.prototype.init = function(){
		this.loading.addClass('hidden');
		this.page.removeClass('hidden');
	}

	Todo.Loader.prototype.requestData = function(){
		var that = this;
		$.ajax({
			url: 'http://marianalino.com.br/webservice/',
			dataType: 'JSON',
			success: function(data){
				that.resource = data;
				console.log(that.resource);
			},
			complete: function(){
				console.log("Terminou a requisição ao server");
			}
		});
	}
})(Todo);