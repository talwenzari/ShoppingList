$(function(){
	$('#add-button').click(function() {
		  console.log('Button clicked');
		  
		  var item = $('#new-item').val();
		  if (item) {
			  addItem(item);
			  $('#new-item').val("");
			  $('#list').listview('refresh');
		  }
	});

	$('#open-file-button').click(function() {
		// TODO Populate file list
	});
	
	$('#list .delete-item-button').live('click', function() {
		console.log("delete button clicked");
		$(this).closest('li').toggleClass('checked');
		//$('#list').listview('refresh');
	});
	
	$('#file-list .delete-item-button').live('click', function() {
		// TODO confirm dialog + delete file
	});
	
	$('#toggle-checked-button').click(function() {
		$('.checked').toggle();
	});
	
	 document.addEventListener('deviceready', function () {
		 console.log("PhoneGap is now loaded!");
	 }, false);
	 
	 function addItem(item) {
		  var newItem = $('#list-template li').clone();
		  newItem.find('.item-text').html(item);
		  $('#list').append(newItem);
	 }
});
