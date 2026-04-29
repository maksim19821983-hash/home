//Задача 1
let person = {
    name: 'Максим',
    age: 18,
    Student: true,
    LoveAroken: true,

}

for (let key in person) {
    console.log(`${key}`, person[key])
}



//Задача 2
let check = {
    
}


function isEmpty(object) {
    for (let key in object) {
    return false;
    }
    return true;
}

console.log(isEmpty(check));


//Задача 3
let task = {
    Title: "title",
    Description: "description",
    isCompleted: true,
}

function cloneAndModify(object,modification) {
    return { ...object, ...modification};
}

let modifieldTask = cloneAndModify(task, {Title:"jdnvs", isCompleted: false});


for (let key in modifieldTask) {
    console.log(`${key}: ${modifieldTask[key]}`)
}




//Задача 4
const myObject = {
    method1() {
        console.log('Метод 1 вызван');
    },
    method2() {
        console.log('Метод 2 вызван');
    },
    property: 'Это не метод'
};

function callAllMethods(object) {
    for (let key in object) {
        if (object.hasOwnProperty(key) && typeof object[key] === 'function') {
            object[key]();
        }
    }
}

callAllMethods(myObject);