function SortOrder(property, order){
	this.property = property
	this.order = order
}

SortOrder.prototype.sortBy = function sortBy(item){
	return new SortOrder(item, !this.order)
}

SortOrder.ASCENDING = true
SortOrder.DESCENDING = false

module.exports = SortOrder
