var core = require('./core')
var data = require('./data')

T('data', data)
T('sortOrder', new core.SortOrder())

$(function(){
	T(function(){
		var data = T('data') || []
		var html = core.templates.table(data)
		document.body.innerHTML = html 
		$('th').click(function(){
			var sortProperty = $(this).text()
			var sort = T('sortOrder')

			T('sortOrder', sort.sortBy(sortProperty))
		})
	})
	T(function(){
		var sort = T('sortOrder')

		var message = core.templates.sortMessage(sort)

		$(document.body).prepend(message)
	})
})



