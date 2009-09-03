(function($) {
	
	$.session_store = function(options) {
		
		return this.each(function(){
			
		});
		
	};
	
	$.session_store.Data = {};
	
	$.session_store.get = function(key) {
		var the_value = $.session_store.Data[key] ? $.session_store.Data[key] : undefined;
		return the_value;
	};
	
	$.session_store.set = function(key, value) {
		$.session_store.Data[key] = value;
		return 'Success saved';
 	};
	
	$.session_store.save = function() {
		window.name = JSON.stringify($.session_store.Data);
	}

	$.session_store.init = function() {
		$.session_store.Data = window.name ? JSON.parse(window.name) : {};
	}
	
	$.session_store.clear = function() {
		$.session_store.Data = {}
	}
	$.session_store.init();
	
	$(window).unload(function(){
		$.session_store.save();
	});
	
})(jQuery);
