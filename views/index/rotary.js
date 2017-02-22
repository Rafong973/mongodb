function rotary(){
	var banner = $(".banner");
	rotate(banner,0);
	for(var i = 0; i < banner.length;i++){
		banner[i].index = i;
	}	
}

function rotate(dom,current){
	var static = 'rotate(90deg) translateZ(0)',
		active = 'rotate(0deg) translateZ(0)';

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
	var arg = 'rotate(0deg) translateZ(0)';
	for(var i=0;i<banner.length;i++){
		banner[i].style.webkitTransform = arg;
		banner[i].style.MozTransform = arg;
		banner[i].style.msTransform = arg;
		banner[i].style.OTransform = arg;
		banner[i].style.transform = arg;
	}
}
