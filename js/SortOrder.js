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
