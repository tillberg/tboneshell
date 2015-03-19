var should = require('chai').should()
var SortOrder = require('../js/SortOrder')

describe('SortOrder', function(){
	var empty
	beforeEach(function(){
		empty = new SortOrder()
	})

	it('adds a sort', function(){
		empty.sortBy('name')
			.property.should.equal('name')
	})

	it('has only a single sort', function(){
		empty.sortBy('name').sortBy('color')
			.property.should.equal('color')
	})

	it('has sort direction', function(){
		empty.sortBy('name').
			direction.should.equal(SortOrder.ASCENDING)
	})

	it('toggles sort direction', function(){
		empty.sortBy('name').sortBy('name')
			.direction.should.equal(SortOrder.DESCENDING)
	})

	it('always starts ascending', function(){
		empty.sortBy('name').sortBy('color')
			.direction.should.equal(SortOrder.ASCENDING)
	})

	context('When sorting arrays',function(){
		var aaron = {name: 'Aaron'}, caroline = {name:'Caroline'}, dan = {name: 'Dan'}
		var names = [aaron, dan, caroline]
	 	 
		it('Sorts an array', function(){
			var sortedNames = [dan, caroline, aaron]
			empty.sortBy('name').sortBy('name').sortThusly(names)
				.should.deep.equal(sortedNames)
		})

		it('Does not sort arrays if it has no sort property', function(){
			empty.sortThusly(names)
				.should.deep.equal(names)
		})
		 
		it('Does not modify the array', function(){
			empty.sortBy('name').sortThusly(names)
				.should.not.equal(names)
		})
	})
})
