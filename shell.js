$(function(){
	T(function(){
		var data = T('data') || ''
		document.body.textContent = JSON.stringify(data)
	})
})
