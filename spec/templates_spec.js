var should = require('chai').should()
var templates = require('../js/templates')

describe('The row template', function(){
	it('Should render a row', function(){
		var obj = {
			color: "red",
			size: "small",
			visibility: "public",
			time: "past"
		}
		var answer = "<tr><td>red</td><td>small</td><td>public</td><td>past</td></tr>"
		templates.row(obj).should.equal(answer)
	})
})

describe('The header template', function(){
	it('should render a header', function(){
		var answer = "<thead><tr><th>Color</th><th>Size</th><th>Visibility</th><th>Time</th></tr></thead>"
		templates.header().should.equal(answer)
	})
})

describe('The table template', function(){
	it('should render the full table', function(){
		var obj = {
			color: "red",
			size: "small",
			visibility: "public",
			time: "past"
		}
		var answer = "<table><thead><tr><th>Color</th><th>Size</th><th>Visibility</th><th>Time</th></tr></thead><tr><td>red</td><td>small</td><td>public</td><td>past</td></tr></table>"
		templates.table([obj]).should.equal(answer)
	})
})
