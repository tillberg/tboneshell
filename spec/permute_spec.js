var should = require('chai').should()
var permute = require('../js/permute')

describe('Permuter', function(){
	it('should create single variable permutations', function(){
		values = {color: ['red', 'blue']}
		objects = [{color: 'red'}, {color: 'blue'}]
		permute(values).should.eql(objects)
	})
	it('should create multivariate permutations', function(){
		values = {
			color: ['red', 'blue'],
			size: ['small', 'large']
		}
		objects = [
			{color: 'red', size: 'small'},
			{color: 'red', size: 'small'},
			{color: 'red', size: 'small'},
			{color: 'red', size: 'small'}
		]
		permute(values).should.deep.include.members(objects)
	})
})
