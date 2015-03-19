function SortOrder(property, direction){
	this.property = property
	this.direction = direction
}

SortOrder.prototype.sortBy = function sortBy(item){
	return new SortOrder(item, !this.direction)
}

SortOrder.ASCENDING = true
SortOrder.DESCENDING = false

module.exports = SortOrder
