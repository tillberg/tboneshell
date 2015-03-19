var _ = require('lodash')

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

SortOrder.prototype.sortThusly = function sortThusly(array){
	var result = _.sortBy(array, this.property)
	if (this.direction === SortOrder.DESCENDING)
		result.reverse()
	return result
}

SortOrder.ASCENDING = true
SortOrder.DESCENDING = false

module.exports = SortOrder
