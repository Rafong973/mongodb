function rotary(){
	var banner = $(".banner");
	rotate(banner,0);
	for(var i = 0; i < banner.length;i++){
		banner[i].index = i;
	}	
}

function rotate(dom,current){
	var static = 'rotate(90deg)',
		active = 'rotate(0deg)';

	console.log(current);
	current = parseInt(current);
	for(var k = 0;k < dom.length;k++){
		dom[k].style.webkitTransform = static;
		dom[k].style.transform = static;
		dom[k].removeAttribute("id");
		dom[k].style.zIndex = '0';
	};
	if(current == dom.length || current == NaN || !current){
		current = 0;
	}
	dom[current].style.webkitTransform = active;
	dom[current].style.transform = active;
	dom[current].style.zIndex = '1';
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
