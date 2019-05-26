let sliders = document.getElementsByClassName('slider')[0],
	screenSlider = sliders.getElementsByClassName('screen')[0],
	screenFooter = screenSlider.getElementsByClassName('screen-footer')[0];

for (let i = 0; i < 4; i++){
	let buttonScreen = document.createElement('div');
	buttonScreen.className = "button";
	buttonScreen.addEventListener("click", function(){
		screenSlider.querySelector('img').src = "./images/image" + (i + 1) + ".jpeg";
	})
	screenFooter.appendChild(buttonScreen);
}