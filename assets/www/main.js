$('#page').live('pageinit',function(){
	$('#add-button').click(function() {
		$('#list').append($(document.createElement('li')).html($('#new-item').val()));
	});
}