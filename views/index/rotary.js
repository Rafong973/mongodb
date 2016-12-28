var clean;
function rotary(){
	var banner = $(".banner");
	console.log(banner);
	rotate(banner,0);
	for(var i = 0; i < banner.length;i++){
		banner[i].setAttribute("index",i);
	}	
}

function rotate(dom,current,direction){
	for(var k = 0;k < dom.length;k++){
		dom[k].className += ' static';
		dom[k].removeAttribute("id");
	};
	if(current == dom.length || current == NaN || !current){
		current = 0;
	}
	dom[current].className = 'banner'
	dom[current].setAttribute("id","current");
	$(".body")[0].style.height = dom[current].clientHeight + 'px';
};


function cleanRotary(){
	var banner = $(".banner");
	for(var i=0;i<banner.length;i++){
		banner[i].style.webkitTransform = 'rotate(0deg)';
		banner[i].style.MozTransform = 'rotate(0deg)';
		banner[i].style.msTransform = 'rotate(0deg)';
		banner[i].style.OTransform = 'rotate(0deg)';
		banner[i].style.transform = 'rotate(0deg)';
	}
}
