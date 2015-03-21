var _ = require('lodash')

exports.sortThusly = function sortThusly(array, prop, isAscending){
	var result = _.sortBy(array, prop)
	if (!isAscending) {
		result.reverse()
	}
	return result
}
