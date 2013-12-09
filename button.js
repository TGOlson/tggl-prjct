var Layout = {
	setEventListeners: function(){
		var buttons = document.querySelectorAll('.toggle-button')
		for(var i = 0; i < buttons.length; i++){
			buttons[i].addEventListener('click', Button.toggleClick)
		}
	}
}

var Button = {}

Button.toggleClick = function(e){
	var button = Button.closestToggleButton(e.target)
	console.log(button)
	Button.toggle(button)
}

Button.closestToggleButton = function(elem){
	while(elem != undefined){
		if(Button.hasClass(elem, 'toggle-button')){
			return elem
		}
		elem = elem.parentNode
	}
}

Button.hasClass = function(elem, klass){
	return elem.className.split(' ').indexOf(klass) > -1
}

Button.toggle = function(button){
	if(Button.hasClass(button, 'toggled')){
		Button.toggleLeft(button)
	} else { 
		Button.toggleRight(button)
	}
}

Button.toggleRight = function(button){
	button.className = button.className + ' toggled'
}

Button.toggleLeft = function(button){
	var buttonClass = button.className.split(' ')
	var oldClassPos = buttonClass.indexOf('toggled')
	buttonClass.splice(oldClassPos, 1)
	button.className = buttonClass.join(' ')
}


window.onload = function() {
	Layout.setEventListeners()
}