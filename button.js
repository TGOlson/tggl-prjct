var SlideToggle = {}

SlideToggle.setEventListeners = function(){
		var buttons = document.querySelectorAll('.toggle-button')
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
		if(SlideToggle.hasClass(elem, 'toggle-button')){
			return elem
		}
		elem = elem.parentNode
	}
}

SlideToggle.hasClass = function(elem, klass){
	return elem.className.split(' ').indexOf(klass) > -1
}

SlideToggle.toggle = function(button){
	if(SlideToggle.hasClass(button, 'toggled')){
		SlideToggle.toggleLeft(button)
	} else { 
		SlideToggle.toggleRight(button)
	}
}

SlideToggle.toggleRight = function(button){
	button.className = button.className + ' toggled'
}

SlideToggle.toggleLeft = function(button){
	var buttonClass = button.className.split(' ')
	var oldClassPos = buttonClass.indexOf('toggled')
	buttonClass.splice(oldClassPos, 1)
	button.className = buttonClass.join(' ')
}

window.onload = function() {
	SlideToggle.setEventListeners()
}