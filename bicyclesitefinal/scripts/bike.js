  
var $listContainer = $('dl.description-list');

$listContainer.on('click', 'dt:not(.active)', function(){
	$listContainer.find('dt.active').removeClass('active');
	$listContainer.find('dd').slideUp();
	$(this).addClass('active').next('dd').slideDown();
});

$listContainer.on('click', 'dt.active', function(){
	$(this).removeClass('active').next('dd').slideUp();
});