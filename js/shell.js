var core = require('./core')
var data = require('./data')

T('data', data)
T('currentSort', new core.SortOrder())
T('sortedData', function(){
	var data = T('data')
	var sort = T('currentSort')

	return sort.sortThusly(data)
})

$(function(){
	T(function(){
		var data = T('sortedData') || []
		var html = core.templates.table(data)
		document.body.innerHTML = html 
		$('th').click(function(){
			var sortProperty = $(this).text().toLowerCase()
			var sort = T('currentSort')

			T('currentSort', sort.sortBy(sortProperty))
		})
	})
})



