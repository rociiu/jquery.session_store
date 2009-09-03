$(function(){
	
	function refresh_store() {
		
		
		
	}
	
	$("#store").click(function(){
		if($("#key").val().length > 0) {
			$.session_store.set($("#key").val(), $("#value").val());
		}
	});
	
});