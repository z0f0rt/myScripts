document.querySelector("button").addEventListener("click", () => {
  let inputs = document.querySelectorAll("input");
  let obj = {
    name: inputs[0].value,
    password: inputs[1].value
  };
  // alert(`Имя пользователя: ${obj.name}, Пароль: ${obj.password}`)
  console.log(`Имя пользователя: ${obj.name}, Пароль: ${obj.password}`);
});
