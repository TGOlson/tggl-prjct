var SlideToggle = {}

SlideToggle.setEventListeners = function(){
		var buttons = document.querySelectorAll('.tggl-button')
		for(var i = 0; i < buttons.length; i++){
			buttons[i].addEventListener('click', SlideToggle.toggleClick)
		}
	}

SlideToggle.toggleClick = function(e){
	var button = SlideToggle.closestToggleButton(e.target)
	SlideToggle.toggle(button)
}

SlideToggle.closestToggleButton = function(elem){
	while(elem != undefined){
		if(SlideToggle.hasClass(elem, 'tggl-button')){
			return elem
		}
		elem = elem.parentNode
	}
}

SlideToggle.hasClass = function(elem, klass){
	return elem.className.split(' ').indexOf(klass) > -1
}

SlideToggle.toggle = function(button){
	if(SlideToggle.hasClass(button, 'tggl-toggled')){
		SlideToggle.toggleLeft(button)
	} else {
		SlideToggle.toggleRight(button)
	}
}

SlideToggle.toggleRight = function(button){
	button.className = button.className + ' tggl-toggled'
}

SlideToggle.toggleLeft = function(button){
	var buttonClass = button.className.split(' ')
	var oldClassPos = buttonClass.indexOf('tggl-toggled')
	buttonClass.splice(oldClassPos, 1)
	button.className = buttonClass.join(' ')
}

window.onload = function() {
	SlideToggle.setEventListeners()
}