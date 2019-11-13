console.log('Hello word');
let variable;
// строка: "Строка", 'Строка', "", ''
// число: -1, 0, 1, 1.01, NaN, Infinity, -Infinity,
// логистическое значение: true, false
// специальные значения: null, undefined

// vfccbd: [], ['Строка', 156, false
// объект: {}, {а: "Строка", b: 156, с: false}
// { a: {}, b: [[], 65]}, [{a: []}]

function increment(arg) {
    return arg + 1;

}
    
variable = increment(10);
console.log(variable);
function condition(str) {
    if (str === 'test') {
        console.log('I want to eat')

    } else {
        console.log('mistake')
    }
    
}

condition("test");
condition();

let list = ["Кристина, Женя, Миша, Юля, Диана"];
let busya = {
    color: "black",
    playful: true,
    legs: 4,

    meow: function(){
        console.log("MEOW!!")
    }
};

console.log(list[0]);
console.log(list[4]);
    console.log(busya.legs);
    busya.meow();

    function traverseList(){
        console.log("------------start--------------------")
        for (let index = 0; index < list.length; index += 1) {
            console.log(list[index]);
            console.log("------------end--------------------");
        }}
    traverseList();

    // логистические операторы
    // равно ===
    // не равно !==
    // меньше <, меньше или равно <=
    // больше >, больше или равно >=
    // и && (true === true; true && false === false)
    // или || (true || false === true === false) - хотя бы 1 значение
//ПРИВЕДЕНИЕ ТИПОВ К ЛОГИЧЕСКОМУ
// "" === false
// "t" === true
// 0 === false
// 165 === true
// nul || undefined === false
// [] || {} || function() {} === true


if ('word' || 165 || [] || {} || function() {}) {
    console.log('yeah, word is truthy')
}

if ('' || 0 || null || undefined || false) {
    console.log("Я невыполнимый :(");
}

console.log("Кристина хочет закончить"[9]);

