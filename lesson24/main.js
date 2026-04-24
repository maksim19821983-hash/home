//Задача 1
function Price(a,b,c) {
let res;
res = (a-(a*(b*0.01)));
return res + (res*c);
}

let a = +prompt("Введите цену",0);
let b = +prompt("введите скидку",0);
let c = +prompt("Введите налоговая ставка",0);

console.log("Итоговая стоимость",Price(a,b,c));

//Задача 2

function checkAccess(name,password) {
    if (name === "admin" && password ==="123456") {
        return "Вход разрешен";
    } else {
        return "Вход запрещен";
    }
}

let name = prompt("Введите имя");
let password = prompt("Введите пароль");
console.log(checkAccess(name,password));

//Задача 3

const GetTimeOfDay = function(time) {

switch (true) { // <--- Меняем time на true
  case time >= 0 && time <= 5:
    console.log("Сейчас ночь");
    break;
  case time > 5 && time <= 11:
    console.log("Сейчас утро");
    break;
  case time > 12 && time <= 17:
    console.log("Сейчас день");
    break;
  case time > 18 && time <= 23:
    console.log("Сейчас вечер");
    break;
  default:
    console.log("Неккоректное время");
}
    return time;
}

let time = GetTimeOfDay(+prompt("Введите время(0-23)"));



//Задача 4



function findFirstEven(start,end) {
for (let i = start; i <=end; i++ ) {
    if (i%2 == 0) {
        return i;
    }
}
    return "Четных не было";
}
start = +prompt("Введите начало диапазона");
end = +prompt("Введите конец диапазона");
console.log(findFirstEven(start,end));