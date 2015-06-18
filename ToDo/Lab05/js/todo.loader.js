;(function(Todo){
	Todo.Loader = function(loading, page){
		this.loading = loading;
		this.page = page;
	};

	Todo.Loader.prototype.init = function(){
		this.loading.addClass('hidden');
		this.page.removeClass('hidden');
	}
})(Todo);