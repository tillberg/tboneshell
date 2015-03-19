var should = require('chai').should()
var templates = require('../js/templates')

describe('Templates', function(){
	var obj = {color: 'red', size: 'small'}

	it('render rows', function(){
		var red = "<td>red</td>"
		var small = "<td>small</td>"
		var answer = "<tr>"+red+small+"</tr>"

		templates.row(obj).should.equal(answer)
	})

	it('render headers', function(){
		var color = "<th>color</th>"
		var size = "<th>size</th>"
		var answer = "<thead><tr>"+color+size+"</tr></thead>"

		templates.header(obj).should.equal(answer)
	})

	it('render a whole table', function(){
		var obj = {
			color: "red",
			size: "small",
			visibility: "public",
			time: "past"
		}
		var answer = "<table><thead><tr><th>color</th><th>size</th><th>visibility</th><th>time</th></tr></thead><tr><td>red</td><td>small</td><td>public</td><td>past</td></tr></table>"
		templates.table([obj]).should.equal(answer)
	})
})

