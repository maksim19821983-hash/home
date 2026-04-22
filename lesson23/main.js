// Задача 1

for(let i = 1; i <= 20; i++) {
    if(i % 4 === 0) {
        continue;
    }
    console.log(i);
}

//Задача 2

let number = +prompt("Введите число");
let ans = 1;

for(let i = 1; i<=number; i++) {
    ans *=i;
}

console.log("Факториал числа",number,"Равен",ans);

// Задача 3

let board = '';

for (let i = 1; i <= 8; i++) { 
    for (let j = 1; j <= 8; j++) { 
        if ((i + j) % 2 === 0) {
            board += 'Б '; 
        } else {
            board += 'Ч '; 
        }
    }
    board += '\n';
}

console.log(board);