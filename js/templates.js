
function tableTemplate(objs){
	var rows = objs.map(rowTemplate).join('')
	return tag('table', headerTemplate(objs[0]) + rows)
}

function rowTemplate(obj){
	var tds = Object.keys(obj).map(function(key){
		return td(obj[key])
	})
	return tr(tds.join(''))
}
function headerTemplate(obj){
	var ths = Object.keys(obj).map(th).join('')
	return tag('thead', tr(ths))
}

function th(val){
	return tag('th', val)
}

function tr(val){
	return tag('tr', val)
}

function td(val){
	return tag('td', val)
}
function tag(tag, val){
	return '<'+tag+'>'+val+'</'+tag+'>'
}

function sortMessage(sortDirection){
	var direction = sortDirection.direction ? 'ascending' : 'descending'
	return tag('div', 'Sorting '+direction+' by '+sortDirection.property+'.')
}

module.exports = {
	header: headerTemplate,
	table: tableTemplate,
	row: rowTemplate,
	sortMessage: sortMessage
}
