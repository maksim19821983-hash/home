"use strict";
//Задача 1

const users = [
    {
        name: "Alex",
        age: 24,
        isAdmin: false,
    }
    ,
    {
        name: "Bob",
        age: 13,
        isAdmin: false,
    }
    ,
    {
        name: "John",
        age: 31,
        isAdmin: true,
    }
    ,
    {
        name: "Jane",
        age: 20,
        isAdmin: false,
    }
]

users.push(
    {
    name: "Ann",
    age: 19,
    isAdmin: false,
    }
    ,
    {
    name: "Jack",
    age: 43,
    isAdmin: true,
    }
)

console.log(users);

//Задача 2

function AVG_users(arr) {
    let sum = 0;
    let avg = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i].age;
    }
    return (sum / arr.length);
}

console.log(AVG_users(users));

//Задача 3

function isAdmin(arr) {
    const adminArr = []
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].isAdmin) {
            adminArr.push(arr[i]);
        }
    }
    return adminArr;
}

console.log(isAdmin(users))


//Задача 4

function first(arr,n) {
    let list = [];
    if( n == 0 ) {
        console.log(arr);
        return;
    } else if(n == undefined) {
        list.push(arr[0]);
        return list;
    } else if (n > arr.length) {
        console.error(`${n} не может быть больше длинный массива: ${arr.length}`)
        return;
    } else {
        for(let i = 0; i < n; i++) {
        list.push(arr[i]);
    }
    }
    return list;
}

let arr = [1,2,3,4,5,6]
console.log(first(arr,4));


