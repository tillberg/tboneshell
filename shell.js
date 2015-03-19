var core = require('./core')
var data = require('./data')

$(function(){
	
	T('data', data)

	T(function(){
		var data = T('data') || []
		var html = core.templates.table(data)
		document.body.innerHTML = html 
	})

})



