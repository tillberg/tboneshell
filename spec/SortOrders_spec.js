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
			order.should.equal(SortOrder.ASCENDING)
	})

	it('toggles sort direction', function(){
		empty.sortBy('name').sortBy('name')
			.order.should.equal(SortOrder.DESCENDING)
	})
})
