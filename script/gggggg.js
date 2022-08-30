let arr = [1,2,3,4];

for(var i = 0; i < arr.length; i++){
    var ul = document.createElement('ul');
    var parent = document.querySelector("#div");
    var li = document.createElement("li");
    li.innerHTML = arr[i];
    parent.appendChild(ul);
    ul.appendChild(li);

    var elems = document.querySelectorAll('li');
// function edit(event){
for (let elem of elems) {
    // var elem = event.target.closest('li');
    // if (elem) {
	elem.addEventListener('click', function func() {
		var input = document.createElement('input');
		input.value = elem.textContent;
		
		elem.textContent = '';
		elem.appendChild(input);
		
		input.addEventListener('blur', function() {
			elem.textContent = this.value;
			elem.addEventListener('click', func);
		});
		elem.removeEventListener('click', func);
	});
};
};
// };
let btn =document.querySelector("button");
// function func1(){
    btn.addEventListener("click", function(){
        var newInp = document.createElement("input");
        ul.appendChild(newInp);
        newInp.addEventListener("blur",function(){
            var newli = document.createElement("li");
            newli.textContent = this.value;
            newInp.remove();
            ul.appendChild(newli)
          newli.addEventListener("click", edit);
        });
    })

 function edit(event){
        var elem = event.target.closest('li');
        if (elem) {
        elem.addEventListener('click', function func() {
            var input = document.createElement('input');
            input.value = this.textContent;
            
            elem.textContent = '';
            elem.appendChild(input);
            
            input.addEventListener('blur', function() {
                elem.textContent = this.value;
                elem.addEventListener('click', func);
            });
            elem.removeEventListener('click', func);
        });
    };
    };
