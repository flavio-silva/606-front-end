;(function(Todo) {

	Todo.Loader = function (loading, page) {
		this.loading = loading;
		this.page = page;
	}

	this.init = function () {
		this.loading.classList.add('hidden');
		this.page.classList.remove('hidden');
	}
})(Todo);