var _ = require('lodash')
function decorate(obj){
	var size = 0
	for (property in obj){
		size += obj[property].length
	}
	
	var result = {size_on_disk: size}
	_.assign(result, obj)

	return result
}

module.exports = {
	decorate: decorate
}
