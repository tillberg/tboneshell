(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function SortOrder(property, direction){
	this.property = property
	this.direction = direction
}

SortOrder.prototype.sortBy = function sortBy(property){
	var direction = SortOrder.ASCENDING
	if (property === this.property)
		direction = !this.direction

	return new SortOrder(property, direction)
}

SortOrder.ASCENDING = true
SortOrder.DESCENDING = false

module.exports = SortOrder

},{}],2:[function(require,module,exports){
function double(n){
	return 2*n
}

module.exports = {
	double: double,
	templates: require('./templates'),
	SortOrder: require('./SortOrder')
}

},{"./SortOrder":1,"./templates":5}],3:[function(require,module,exports){
module.exports = [
  {
    "color": "red",
    "size": "small",
    "visibility": "public",
    "time": "past"
  },
  {
    "color": "red",
    "size": "small",
    "visibility": "public",
    "time": "present"
  },
  {
    "color": "red",
    "size": "small",
    "visibility": "public",
    "time": "future"
  },
  {
    "color": "red",
    "size": "small",
    "visibility": "private",
    "time": "past"
  },
  {
    "color": "red",
    "size": "small",
    "visibility": "private",
    "time": "present"
  },
  {
    "color": "red",
    "size": "small",
    "visibility": "private",
    "time": "future"
  },
  {
    "color": "red",
    "size": "medium",
    "visibility": "public",
    "time": "past"
  },
  {
    "color": "red",
    "size": "medium",
    "visibility": "public",
    "time": "present"
  },
  {
    "color": "red",
    "size": "medium",
    "visibility": "public",
    "time": "future"
  },
  {
    "color": "red",
    "size": "medium",
    "visibility": "private",
    "time": "past"
  },
  {
    "color": "red",
    "size": "medium",
    "visibility": "private",
    "time": "present"
  },
  {
    "color": "red",
    "size": "medium",
    "visibility": "private",
    "time": "future"
  },
  {
    "color": "red",
    "size": "large",
    "visibility": "public",
    "time": "past"
  },
  {
    "color": "red",
    "size": "large",
    "visibility": "public",
    "time": "present"
  },
  {
    "color": "red",
    "size": "large",
    "visibility": "public",
    "time": "future"
  },
  {
    "color": "red",
    "size": "large",
    "visibility": "private",
    "time": "past"
  },
  {
    "color": "red",
    "size": "large",
    "visibility": "private",
    "time": "present"
  },
  {
    "color": "red",
    "size": "large",
    "visibility": "private",
    "time": "future"
  },
  {
    "color": "red",
    "size": "massive",
    "visibility": "public",
    "time": "past"
  },
  {
    "color": "red",
    "size": "massive",
    "visibility": "public",
    "time": "present"
  },
  {
    "color": "red",
    "size": "massive",
    "visibility": "public",
    "time": "future"
  },
  {
    "color": "red",
    "size": "massive",
    "visibility": "private",
    "time": "past"
  },
  {
    "color": "red",
    "size": "massive",
    "visibility": "private",
    "time": "present"
  },
  {
    "color": "red",
    "size": "massive",
    "visibility": "private",
    "time": "future"
  },
  {
    "color": "green",
    "size": "small",
    "visibility": "public",
    "time": "past"
  },
  {
    "color": "green",
    "size": "small",
    "visibility": "public",
    "time": "present"
  },
  {
    "color": "green",
    "size": "small",
    "visibility": "public",
    "time": "future"
  },
  {
    "color": "green",
    "size": "small",
    "visibility": "private",
    "time": "past"
  },
  {
    "color": "green",
    "size": "small",
    "visibility": "private",
    "time": "present"
  },
  {
    "color": "green",
    "size": "small",
    "visibility": "private",
    "time": "future"
  },
  {
    "color": "green",
    "size": "medium",
    "visibility": "public",
    "time": "past"
  },
  {
    "color": "green",
    "size": "medium",
    "visibility": "public",
    "time": "present"
  },
  {
    "color": "green",
    "size": "medium",
    "visibility": "public",
    "time": "future"
  },
  {
    "color": "green",
    "size": "medium",
    "visibility": "private",
    "time": "past"
  },
  {
    "color": "green",
    "size": "medium",
    "visibility": "private",
    "time": "present"
  },
  {
    "color": "green",
    "size": "medium",
    "visibility": "private",
    "time": "future"
  },
  {
    "color": "green",
    "size": "large",
    "visibility": "public",
    "time": "past"
  },
  {
    "color": "green",
    "size": "large",
    "visibility": "public",
    "time": "present"
  },
  {
    "color": "green",
    "size": "large",
    "visibility": "public",
    "time": "future"
  },
  {
    "color": "green",
    "size": "large",
    "visibility": "private",
    "time": "past"
  },
  {
    "color": "green",
    "size": "large",
    "visibility": "private",
    "time": "present"
  },
  {
    "color": "green",
    "size": "large",
    "visibility": "private",
    "time": "future"
  },
  {
    "color": "green",
    "size": "massive",
    "visibility": "public",
    "time": "past"
  },
  {
    "color": "green",
    "size": "massive",
    "visibility": "public",
    "time": "present"
  },
  {
    "color": "green",
    "size": "massive",
    "visibility": "public",
    "time": "future"
  },
  {
    "color": "green",
    "size": "massive",
    "visibility": "private",
    "time": "past"
  },
  {
    "color": "green",
    "size": "massive",
    "visibility": "private",
    "time": "present"
  },
  {
    "color": "green",
    "size": "massive",
    "visibility": "private",
    "time": "future"
  },
  {
    "color": "blue",
    "size": "small",
    "visibility": "public",
    "time": "past"
  },
  {
    "color": "blue",
    "size": "small",
    "visibility": "public",
    "time": "present"
  },
  {
    "color": "blue",
    "size": "small",
    "visibility": "public",
    "time": "future"
  },
  {
    "color": "blue",
    "size": "small",
    "visibility": "private",
    "time": "past"
  },
  {
    "color": "blue",
    "size": "small",
    "visibility": "private",
    "time": "present"
  },
  {
    "color": "blue",
    "size": "small",
    "visibility": "private",
    "time": "future"
  },
  {
    "color": "blue",
    "size": "medium",
    "visibility": "public",
    "time": "past"
  },
  {
    "color": "blue",
    "size": "medium",
    "visibility": "public",
    "time": "present"
  },
  {
    "color": "blue",
    "size": "medium",
    "visibility": "public",
    "time": "future"
  },
  {
    "color": "blue",
    "size": "medium",
    "visibility": "private",
    "time": "past"
  },
  {
    "color": "blue",
    "size": "medium",
    "visibility": "private",
    "time": "present"
  },
  {
    "color": "blue",
    "size": "medium",
    "visibility": "private",
    "time": "future"
  },
  {
    "color": "blue",
    "size": "large",
    "visibility": "public",
    "time": "past"
  },
  {
    "color": "blue",
    "size": "large",
    "visibility": "public",
    "time": "present"
  },
  {
    "color": "blue",
    "size": "large",
    "visibility": "public",
    "time": "future"
  },
  {
    "color": "blue",
    "size": "large",
    "visibility": "private",
    "time": "past"
  },
  {
    "color": "blue",
    "size": "large",
    "visibility": "private",
    "time": "present"
  },
  {
    "color": "blue",
    "size": "large",
    "visibility": "private",
    "time": "future"
  },
  {
    "color": "blue",
    "size": "massive",
    "visibility": "public",
    "time": "past"
  },
  {
    "color": "blue",
    "size": "massive",
    "visibility": "public",
    "time": "present"
  },
  {
    "color": "blue",
    "size": "massive",
    "visibility": "public",
    "time": "future"
  },
  {
    "color": "blue",
    "size": "massive",
    "visibility": "private",
    "time": "past"
  },
  {
    "color": "blue",
    "size": "massive",
    "visibility": "private",
    "time": "present"
  },
  {
    "color": "blue",
    "size": "massive",
    "visibility": "private",
    "time": "future"
  },
  {
    "color": "black",
    "size": "small",
    "visibility": "public",
    "time": "past"
  },
  {
    "color": "black",
    "size": "small",
    "visibility": "public",
    "time": "present"
  },
  {
    "color": "black",
    "size": "small",
    "visibility": "public",
    "time": "future"
  },
  {
    "color": "black",
    "size": "small",
    "visibility": "private",
    "time": "past"
  },
  {
    "color": "black",
    "size": "small",
    "visibility": "private",
    "time": "present"
  },
  {
    "color": "black",
    "size": "small",
    "visibility": "private",
    "time": "future"
  },
  {
    "color": "black",
    "size": "medium",
    "visibility": "public",
    "time": "past"
  },
  {
    "color": "black",
    "size": "medium",
    "visibility": "public",
    "time": "present"
  },
  {
    "color": "black",
    "size": "medium",
    "visibility": "public",
    "time": "future"
  },
  {
    "color": "black",
    "size": "medium",
    "visibility": "private",
    "time": "past"
  },
  {
    "color": "black",
    "size": "medium",
    "visibility": "private",
    "time": "present"
  },
  {
    "color": "black",
    "size": "medium",
    "visibility": "private",
    "time": "future"
  },
  {
    "color": "black",
    "size": "large",
    "visibility": "public",
    "time": "past"
  },
  {
    "color": "black",
    "size": "large",
    "visibility": "public",
    "time": "present"
  },
  {
    "color": "black",
    "size": "large",
    "visibility": "public",
    "time": "future"
  },
  {
    "color": "black",
    "size": "large",
    "visibility": "private",
    "time": "past"
  },
  {
    "color": "black",
    "size": "large",
    "visibility": "private",
    "time": "present"
  },
  {
    "color": "black",
    "size": "large",
    "visibility": "private",
    "time": "future"
  },
  {
    "color": "black",
    "size": "massive",
    "visibility": "public",
    "time": "past"
  },
  {
    "color": "black",
    "size": "massive",
    "visibility": "public",
    "time": "present"
  },
  {
    "color": "black",
    "size": "massive",
    "visibility": "public",
    "time": "future"
  },
  {
    "color": "black",
    "size": "massive",
    "visibility": "private",
    "time": "past"
  },
  {
    "color": "black",
    "size": "massive",
    "visibility": "private",
    "time": "present"
  },
  {
    "color": "black",
    "size": "massive",
    "visibility": "private",
    "time": "future"
  },
  {
    "color": "white",
    "size": "small",
    "visibility": "public",
    "time": "past"
  },
  {
    "color": "white",
    "size": "small",
    "visibility": "public",
    "time": "present"
  },
  {
    "color": "white",
    "size": "small",
    "visibility": "public",
    "time": "future"
  },
  {
    "color": "white",
    "size": "small",
    "visibility": "private",
    "time": "past"
  },
  {
    "color": "white",
    "size": "small",
    "visibility": "private",
    "time": "present"
  },
  {
    "color": "white",
    "size": "small",
    "visibility": "private",
    "time": "future"
  },
  {
    "color": "white",
    "size": "medium",
    "visibility": "public",
    "time": "past"
  },
  {
    "color": "white",
    "size": "medium",
    "visibility": "public",
    "time": "present"
  },
  {
    "color": "white",
    "size": "medium",
    "visibility": "public",
    "time": "future"
  },
  {
    "color": "white",
    "size": "medium",
    "visibility": "private",
    "time": "past"
  },
  {
    "color": "white",
    "size": "medium",
    "visibility": "private",
    "time": "present"
  },
  {
    "color": "white",
    "size": "medium",
    "visibility": "private",
    "time": "future"
  },
  {
    "color": "white",
    "size": "large",
    "visibility": "public",
    "time": "past"
  },
  {
    "color": "white",
    "size": "large",
    "visibility": "public",
    "time": "present"
  },
  {
    "color": "white",
    "size": "large",
    "visibility": "public",
    "time": "future"
  },
  {
    "color": "white",
    "size": "large",
    "visibility": "private",
    "time": "past"
  },
  {
    "color": "white",
    "size": "large",
    "visibility": "private",
    "time": "present"
  },
  {
    "color": "white",
    "size": "large",
    "visibility": "private",
    "time": "future"
  },
  {
    "color": "white",
    "size": "massive",
    "visibility": "public",
    "time": "past"
  },
  {
    "color": "white",
    "size": "massive",
    "visibility": "public",
    "time": "present"
  },
  {
    "color": "white",
    "size": "massive",
    "visibility": "public",
    "time": "future"
  },
  {
    "color": "white",
    "size": "massive",
    "visibility": "private",
    "time": "past"
  },
  {
    "color": "white",
    "size": "massive",
    "visibility": "private",
    "time": "present"
  },
  {
    "color": "white",
    "size": "massive",
    "visibility": "private",
    "time": "future"
  }
]

},{}],4:[function(require,module,exports){
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




},{"./core":2,"./data":3}],5:[function(require,module,exports){

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

},{}]},{},[4]);
