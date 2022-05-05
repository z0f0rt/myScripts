document.querySelector("button").addEventListener("click", () => {
  let inputs = document.querySelectorAll("input");
  let obj = {
    name: inputs[0].value,
    password: inputs[1].value,
  };;
  let x = document.querySelector("#id-sum");
  if (inputs[0].value === "Слава") {
    // document.querySelector('.suk').innerHTML = "Пользователь с таким именем уже зарегестрирован!"
    x.className = "suk";
    x.innerHTML = "Пользователь с таким именем уже зарегестрирован!";
  } else {
    console.log(`Имя пользователя: ${obj.name}, Пароль: ${obj.password}`);
    x.className = "sum";
    x.innerHTML = `Пользователь с именем: ${obj.name} и паролем: ${obj.password} успешно зарегестрирован. Поздравляю!`;
  }
});

// document.querySelector("button").onclick = () => {
//   alert("Вы нажали кнопку");
// };

// alert(`Имя пользователя: ${obj.name}, Пароль: ${obj.password}`)
