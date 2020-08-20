let next = document.getElementById('next');
let previous = document.getElementById('previous');
let img = document.getElementById('img');

let names = ['calm', 'college', 'colorful', 'happy', 'white', 'me', 'mylove', 'savag'];
let index = 0;

next.onclick = nextPhoto;
previous.onclick = previousPhoto;

function nextPhoto(){
	if(index == names.length -1){
		index = 0;
	    img.src = `img/${names[index]}.jpg`;
	}else{
		index = index+1;
	    img.src = `img/${names[index]}.jpg`;
	}
}


function previousPhoto(){
	if(index == 0){
		index = names.length;
		index = index-1;
		img.src = `img/${names[index]}.jpg`;
	}else{
		index = index-1;
		img.src = `img/${names[index]}.jpg`;
	}
}