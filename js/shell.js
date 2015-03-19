var core = require('./core')
var data = require('./data')

T('data', data)
T('currentSort', new core.SortOrder())

$(function(){
	T(function(){
		var data = T('data') || []
		var html = core.templates.table(data)
		document.body.innerHTML = html 
		$('th').click(function(){
			var sortProperty = $(this).text()
			var sort = T('currentSort')

			T('currentSort', sort.sortBy(sortProperty))
		})
	})
	T(function(){
		var sort = T('currentSort')

		var message = core.templates.sortMessage(sort)

		$(document.body).prepend(message)
	})
})



