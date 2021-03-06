var core = require('./core')
var data = require('./data')

// Overview:
// - We *set* sort settings only in T('mem')
// - We *read* sort settings only from T('currentSort')
//
// This gives us flexibility to define defaults however
// we want, while making a very clear distinction between
// defaults and values that were explicitly set by the user.
//
// Also, we are constraining all the page state to specific
// buckets, making a clear distinction between data that
// represents the changeable state of the page, and data
// that has been computed from it. The goal is to have the
// bulk of the code/computationse/etc take the form of
// *computed* values, while reducing down the "changeable
// state" of the page to its bare minimum.
//
// For example, the sortedData is not part of the *state* of
// the page, and shouldn't be stored in the URL or
// localStorage or anything like that. It can be *derived*
// from the: data that we load from a specific URL on the
// server, the current sort property, and the current sort
// direction.

// T('ls') is where we'll store all the changeable page
// state, and is automatically two-way-persisted to
// localStorage (in localStorage.sortSettings).
T('ls', tbone.models.localStorage.make({
	key: 'sortSettings',
}));

// T('currentSort') calculates the *defaulted* sort
// property and direction.
var defaultSortProp = 'size_on_disk';
var defaultSortAsc = true;
T('defaultedSort', function() {
	var sortProp = T('ls.sortProp');
	var sortAsc = T('ls.sortAsc');
	return {
		prop: sortProp != null ? sortProp : defaultSortProp,
		asc: sortAsc != null ? sortAsc : defaultSortAsc,
	};
});

T('data', data)
T('decoratedData', function(){
	var data = T('data')

	return data.map(core.Decorator.decorate)
})
T('sortedData', function(){
	var data = T('decoratedData');
	var sortProp = T('defaultedSort.prop');
	var sortAsc = T('defaultedSort.asc');

	return core.SortOrder.sortThusly(data, sortProp, sortAsc);
})

$(function(){
	T(function(){
		var data = T('sortedData') || []
		var html = core.templates.table(data)
		$('table')[0].outerHTML = html
		$('th').click(function(){
			var newSortProp = $(this).text().toLowerCase();
			var currentSortProp = T.readSilent('defaultedSort.prop');
			if (newSortProp !== currentSortProp) {
				T('ls.sortProp', newSortProp);
				T('ls.sortAsc', null);
			} else {
				T('ls.sortAsc', !T.readSilent('defaultedSort.asc'));
			}
		})
	})
})
