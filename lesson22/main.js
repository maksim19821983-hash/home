// Задача 1

let x = +prompt("Введите число на проверку",0);
let result = x % 2 == 0 ? console.log("Число четное") : console.log("Число нечетное");

//Задача 2

let age = +prompt("Введите возраст для получени скидки",0); 

let discount = age < 18 ? 10 : 18<age<=65 ? 20 : 30;

console.log("Скидка",discount,"%");


const ageCase = +prompt("Введите возраст для получени скидки",0)
let discountCase = 0 ;


switch (true) {
    case ageCase <= 18:
        console.log('Скидка 10%');
        break;
    case ageCase <= 65:
        console.log('Скидка 20%');
        break;
    case ageCase > 65:
        console.log('Скидка 30%');
        break;
    default:
        console.log('Возраст некорректен');
}



//Задача 3

let username = +prompt("Введите имя",0);

let password = +prompt("Введите пароль");

if (username == 'admin' || username == 'user' && password == '12345678') {
    console.log("Доступ разрешен");
}  else {
    console.log("Доступ запрещен");
}


//Задача 4
let type;
let cost;
let multiplier;
let kg = +prompt("Укажите вес посылки (кг)",0);
let kgcost = kg < 1 ? 5 : (kg >= 1 && kg <= 5) ? 10 : 15;
if (kg <= 0) {
    alert('Неккоректный вес посылки');
    exit;
}   else {
    type = prompt('Укажите тип доставки');
}

if (type !== 'Стандарт' && type !== 'Экспресс' && type !== 'Премиум' && type !== 'стандарт' && type !== 'экспресс' && type !== 'премиум') {
    alert("Неверный тип доставки");
    exit;
} else {
    if (type === 'стандарт' || type ==="Стандарт") {
    multiplier = 1;
    } else if (type === 'экспресс' || type === "Экспресс") {
        multiplier = 1.5;
        } else if (type === 'премиум' || type ==="Премиум") {
            multiplier = 2;
            } else {
                alert("Неверный тип доставки");
                exit; 
            }
}

cost = kg*kgcost*multiplier;
console.log("Итоговая стоимость доставки:",cost,"$");


