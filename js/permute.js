var _ = require('lodash')

module.exports = function(values){
	var keys = Object.keys(values)
	return keys.reduce(function(set_so_far, key){
		return _.flatten(set_so_far.map(function(value){
			return cross_product(value, key, values[key])
		}))
	}, [{}])
}

function cross_product(base_obj, new_key, new_values){
	return new_values.map(function(value){
		result = _.clone(base_obj)
		result[new_key] = value
		return result
	})
}
