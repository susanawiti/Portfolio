let images = document.querySelectorAll('.thumbnails img');



let largeImage = document.createElement('img');


let viewer = document.querySelector('.viewer');
viewer.appendChild(largeImage);



console.log(largeImage);


images.forEach( function(image){


	// image.onclick = function click(event) {
	// 	//let img = event.target;
	// 	//console.log(img.src;
	// 	let img = event.target;	
	// 	//let viewer = document.querySelector('.viewer img');
	// 	//console.log(viewer);
	// 	//viewer.src = img.src
	// 	if(img.src === largeImage.src){
	// 		//console.log('displayed')
	// 		largeImage.src = '';
	// 		viewer.innerHTML = '';
	// 	} else{
	//     viewer.appendChild(largeImage);

	// 	largeImage.src = img.src;
	// 	caption.innerHTML = 
	// 	}
       
		//largeImage.src = img.src;{
		
			image.onclick = function(event) {
				let image = event.target;
				largeImage.src = image.src;
				console.log('clicked');

				let caption = image.getAttribute('data-caption');
				console.log(caption);
			
	}


})
