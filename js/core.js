function double(n){
	return 2*n
}

module.exports = {
	double: double,
	templates: require('./templates'),
	SortOrder: require('./SortOrder'),
	Decorator: require('./Decorator')
}
