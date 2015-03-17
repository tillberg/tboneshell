T('N', 0)

setInterval(function(){
	var n = T("N");
	n++
	T("N", n)
}, 500)

T('doubled', function(){
	var n = T("N")
	return double(n)
})

T(function(){
	var n = T("doubled")
	document.body.textContent = n
})
