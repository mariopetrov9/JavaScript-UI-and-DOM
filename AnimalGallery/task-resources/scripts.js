function createImagesPreviewer(selector, items) {
  var root = document.querySelector(selector),
  	  frag = document.createDocumentFragment(),
  	  left = document.createElement('div'),
  	  right = document.createElement('div');
  	  // LEFT SIDE
  	  left.classList += ' image-preview';
  	  left.style.float = 'left';
  	  left.style.display = 'inline-block';
  	  left.style.width = '70%'
  	  left.style.textAlign = 'center';
  	  var selectedImg = document.createElement('img'),
  	  	  selectedTitle = document.createElement('h2');
  	  selectedImg.src = items[0].url;
  	  selectedImg.style.width = '85%';
  	  selectedImg.style.borderRadius = '25px';
  	  selectedTitle.innerText = items[0].title;
  	  left.appendChild(selectedTitle);
  	  left.appendChild(selectedImg);






  	  //RIGHT PART
  	  right.classList += ' desniq';
  	  right.style.display = 'inline-block';
  	  right.style.width = '25%';
  	  listOfitems = document.createElement('ul');
  	  listOfitems.style.listStyleType ='none'
  	  listOfitems.style.height = '400px';
  	  listOfitems.style.overflowY = 'scroll';
  	  listOfitems.addEventListener('click', function(ev){
  	  		var target = ev.target;
  	  		if(target.tagName === 'IMG'){
  	  			var header = target.previousElementSibling.innerText,
  	  				source = target.src;
  	  				selectedTitle.innerText = header;
  	  				selectedImg.src = source;
  	  		}




  	  }, false)

  	  listOfitems.addEventListener('mouseover', function(ev){
  	  		var target = ev.target;
  	  		if(target.tagName === 'IMG'){
  	  			target.parentElement.style.backgroundColor = 'blue';
  	  			//console.log(ev);
  	  		}
  	  		}, false)

  	  listOfitems.addEventListener('mouseout', function(ev){
  	  		var target = ev.target;
  	  		if(target.tagName === 'IMG'){
  	  			target.parentElement.style.backgroundColor = '';
  	  			//console.log(ev);
  	  		}
  	  		}, false)

  	  label = document.createElement('label');
  	  input = document.createElement('input');
  	  label.innerHTML = '<span>Filter<span><br>';

  	  

  	  filterDiv = document.createElement('div');
  	  filterDiv.style.display = 'inline-block';
  	  filterDiv.style.textAlign = 'center';
  	  filterDiv.appendChild(label);
  	  filterDiv.appendChild(input);
  	  listOfitems.appendChild(filterDiv);
  	  input.addEventListener('input', function (ev){
  	  	var text = ev.target.value;
  	  	liItems = listOfitems.getElementsByTagName('li');
  	  	var j,
  	  		len = liItems.length;
  	  	for(j = 0; j < len ; j += 1){
  	  		var curLi = liItems[j],
  	  			curHeader = curLi.firstElementChild.innerText;
  	  		if(curHeader.toLowerCase().indexOf(text.toLowerCase()) >= 0){
  	  			curLi.style.display = 'block';
  	  		}else{
  	  			curLi.style.display ='none';
  	  		}

  	  	}



  	  }, false)
  	  
  	  li = document.createElement('li');
  	  li.style.textAlign = 'center';
  	  li.classList += ' image-container';
  	  var i = 0,
  	  	  len = items.length,
  	  	  h3 = document.createElement('h3'),
  	  	  image = document.createElement('img');
  	  	  image.style.width = '90%';
  	  	  image.style.borderRadius = '10px';
  	  for(i = 0; i < len; i += 1){
  	  	var title = items[i].title,
  	  		src = items[i].url,
  	  		imgHeader = h3.cloneNode(true),
  	  		img = image.cloneNode(true);
  	  	imgHeader.innerText = title;
  	  	img.src = src;
  	  	
  	  	var currentLi = li.cloneNode(true);
  	  	currentLi.appendChild(imgHeader);
  	  	currentLi.appendChild(img); 	  
  	  	listOfitems.appendChild(currentLi);}
  	  right.appendChild(listOfitems);



  	  frag.appendChild(left);
  	  frag.appendChild(right);
  	  root.appendChild(frag);
}
 	