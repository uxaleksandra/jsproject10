var list = document.getElementById('list')
var add = document.getElementById('addElem')
	
console.log(list);
console.log(add);
		
add.addEventListener('click', function() {
	var liNumber = document.getElementsByTagName('li')
	list.innerHTML += '<li>item</li>'+ liNumber.length;
});
