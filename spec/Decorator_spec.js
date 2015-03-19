var should = require('chai').should()
var Decorator = require('../js/Decorator')

describe('The decorator',function(){
	var aaron = {name: 'Aaron', shirt_size: 'large'}
	it("decorates with a 'size on disk'", function(){
		var total_size = aaron.name.length + aaron.shirt_size.length

		Decorator.decorate(aaron).should.have.property('size_on_disk', total_size)
	})


	it('preserves all properties', function(){
		Decorator.decorate(aaron).should.have.property('name', aaron.name)
		Decorator.decorate(aaron).should.have.property('shirt_size', aaron.shirt_size)
	})


	it('does not modify the original object', function(){
		Decorator.decorate(aaron).should.not.equal(aaron)
	})
})
