const arr = [1, 2, 3, 4];

const ul = document.createElement('ul');
for (let i = 0; i < arr.length; i++) {
    const parent = document.querySelector("#div");
    const li = document.createElement("li");
    li.innerHTML = arr[i];
    parent.appendChild(ul);
    ul.appendChild(li);

    const elems = document.querySelectorAll('li');
    for (let elem of elems) {
        // var elem = event.target.closest('li');
        // if (elem) {
        elem.addEventListener('click', function func() {
            var input = document.createElement('input');
            input.value = elem.textContent;
            elem.textContent = '';
            elem.appendChild(input);
            input.addEventListener('blur', function () {
                elem.textContent = this.value;
                elem.addEventListener('click', func);
            });
            elem.removeEventListener('click', func);
        });
    }
    ;
}
;

const btn = document.querySelector("button");
btn.addEventListener("click", function () {
    var newInp = document.createElement("input");
    ul.appendChild(newInp);
    newInp.addEventListener("blur", function () {
        var newli = document.createElement("li");
        newli.textContent = this.value;
        newInp.remove();
        ul.appendChild(newli)
        newli.addEventListener("click", edit);
    });
})

function edit(event) {
    var elem = event.target.closest('li');
    if (elem) {
        elem.addEventListener('click', function func() {
            var input = document.createElement('input');
            input.value = this.textContent;

            elem.textContent = '';
            elem.appendChild(input);

            input.addEventListener('blur', function () {
                elem.textContent = this.value;
                elem.addEventListener('click', func);
            });
            elem.removeEventListener('click', func);
        });
    }
    ;
};
