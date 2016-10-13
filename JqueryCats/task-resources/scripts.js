/* globals $ */
$.fn.gallery = function (columns) {
	columns = columns || 4;
	var $this = $(this);
	var $previousImage = $this.find('#previous-image');
	var $nextImage = $this.find('#next-image');
	var $currentImage = $this.find('#current-image');
	var $selected = $this.find('.selected');
	var $imageContainers = $this.find('.image-container');
	var count = 0;
	$imageContainers.each(function(index, imageContainer){
			count += 1;
			if(count === columns){
				var $imageContainer = $(imageContainer);
				$imageContainer.after($('<div/>').addClass('clearfix'));
				count = 0;
			}
	});		
	var $galleryList = $this.find('.gallery-list');
	$galleryList.on('click', '.image-container', 
	function(){
			var $this = $(this);
			$currentImage.attr('src', $this.find('img')
										   .attr('src'));
			
			var currentIndex = $this.find('img').attr('data-info') - 1;
			currentIndex %= $imageContainers.length;
			var previousIndex = currentIndex - 1;
			var $prev = $imageContainers.eq(previousIndex);
			$previousImage.attr('src', $prev.find('img')
										    .attr('src'))
											.attr('data-info', previousIndex + 1);
			var nextIndex = currentIndex + 1
			if(nextIndex === $imageContainers.length){
				nextIndex %= $imageContainers.length;
			}
			var $next = $imageContainers.eq(nextIndex);
			$nextImage.attr('src', $next.find('img')
				                        .attr('src'))
										.attr('data-info', nextIndex + 1);
			$selected.show();
			$galleryList.addClass('blurred');
			$galleryList.addClass('disabled-background');
	});
	$currentImage.on('click', function(){
		$selected.hide();
		$galleryList.removeClass('blurred');
	});

	$previousImage.on('click', function (){
		var $this = $(this);
		var currentIndex = $this.attr('data-info') - 1;
		var previousIndex = (currentIndex - 1) % $imageContainers.length;
		var nextIndex = (currentIndex + 1) % $imageContainers.length;
		previousIndex = +previousIndex;
		var $current = $imageContainers.eq(currentIndex).find('img'); 
		var $prev = $imageContainers.eq(previousIndex).find('img');
		var $next = $imageContainers.eq(nextIndex).find('img');

		$currentImage.attr('src', $current.attr('src')) 
										  .attr('data-info', currentIndex + 1);

		$nextImage.attr('src', $next.attr('src')) 
										  .attr('data-info', nextIndex + 1); 

	    $previousImage.attr('src', $prev.attr('src')) 
										  .attr('data-info', previousIndex + 1);  
	})


	$nextImage.on('click', function (){	
		var	$this = $(this);
		var currentIndex = $this.attr('data-info') - 1;
		var previousIndex = (currentIndex - 1);
		var nextIndex = (currentIndex + 1) % $imageContainers.length;
		var $current = $imageContainers.eq(currentIndex).find('img'); 
		var $prev = $imageContainers.eq(previousIndex).find('img');
		var $next = $imageContainers.eq(nextIndex).find('img');

		$currentImage.attr('src', $current.attr('src')) 
										  .attr('data-info', currentIndex + 1);

		$nextImage.attr('src', $next.attr('src')) 
										  .attr('data-info', nextIndex + 1); 

	    $previousImage.attr('src', $prev.attr('src')) 
										  .attr('data-info', previousIndex + 1);  
	
	})


	$this.addClass('gallery');
	$selected.hide();
};