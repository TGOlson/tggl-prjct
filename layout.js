var Layout = {}

Layout.init = function(){
	var buttons = Layout.getAllClassTags('.toggle-button')
	var circles = Layout.getAllClassTags('.toggle-circle')
	Layout.appendClassTagsToDivs(buttons, circles)
}

Layout.getAllClassTags = function(klass){
	var elems = Layout.findAll(klass)
	return Layout.mapListToClasses(elems)
}

Layout.findAll = function(elem){
	return document.querySelectorAll(elem)
}

Layout.mapListToClasses = function(elems){
	var classNames = []
	for(var i = 0; i < elems.length; i++){
		classNames.push( elems[i].className )
	}
	return classNames
}

Layout.appendClassTagsToDivs = function(buttons, circles){
	var cols = Layout.findAll('.col')
	for(var i = 0; i < cols.length; i++){
		cols[i].innerHTML += '<pre>' + buttons[i] + '</pre>' + 
	 						 '<pre>' + circles[i] + '</pre>'
	}
}