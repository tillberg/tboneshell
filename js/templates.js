
function tableTemplate(objs){
	var rows = objs.map(rowTemplate).join('')
	return tag('table', headerTemplate() + rows)
}

function rowTemplate(obj){
	return tr(
					td(obj.color) +
					td(obj.size) +
					td(obj.visibility) +
					td(obj.time)
					)
}
function headerTemplate(){
	var attributes = ['Color', 'Size', 'Visibility', 'Time']
	var ths = attributes.map(th).join('')
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

module.exports = {
	header: headerTemplate,
	table: tableTemplate,
	row: rowTemplate
}
