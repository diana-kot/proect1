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

function increment10(arg) {
  return arg + 10;
 }
    
variable = increment(10);
console.log(variable);


variable = increment10(10);
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

    function traverseList()
    {
        console.log("------------start--------------------")
        for (let index = 0; index < list.length; index +=1) 
        {
            console.log(list[index]);
        }
        console.log("------------end--------------------");
    }
  
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


let arr  = [0, 50, 20, 40, 10];
          
function traverseList1()
    {
        let arVariable;
        console.log("------------start--------------------")

        for (let index = 0; index < arr.length; index ++) 
        { /*1*/ arVariable = arr[index]+10;
                 console.log(arVariable);
          
         /*2*/ // console.log(arr[index]+10); 
         /*3*/ // console.log(increment10(arr[index]));
        }
        console.log("------------end--------------------");
    }

 traverseList1(); /// вызов функции. 
 
 var myArray = 'Manchester, London, Liverpool, Birmingham, Leeds, Carlisle';
  function dd()
  {
      let sd;
      console.log("------------start--------------------")
       sd = myArray.split(',');
      for(let i = 0; i < myArray.length; i++)
      {
         console.log(sd[i]);
      }
      console.log("------------start--------------------")
  }
  dd(); 

  
  var myA = ['Manchester', 'London', 'Liverpool', 'Birmingham', 'Leeds', 'Carlisle'];
  function ss()
  {
      let vv;
      console.log("------------start--------------------")
      vv=myA.push('Cardiff');
      for(let h = 0; h < myA.length; h++)
      {
          console.log(vv);
      }
      console.log("------------end--------------------")
    }
  ss();

  var myName;
  var myAge;
  myName = "Chris";
  myAge = 37
  myName = 'Bob';
myAge = 40;

var myNameArray = ['Юля', 'Дана', 'Сережа'];
var myNumberArray = [10,15,20];
console.log(myNameArray[2]);
console.log(myNumberArray[0])

let myInt = 5;
let myFloat = 6.667;
console.log(myFloat);

let myint = 7;
console.log(myint);
console.log(typeof myint);

function can ()
{
    let num1 = 10;
    let num2 = 50;
    let sym
    sym = 9 * num1;
    stepen = num1 ** 3;
    delen = num2 / num1;
    u = (num2++);
    console.log(sym);
    console.log(stepen);
    console.log(delen);
    console.log(u);
}
can();

function can2 ()
{
    let num3 = 8;
    let g;
    g = (++num3);
    
    console.log(g);
}
can2();

var name;
name = "alex";
console.log(name);
 
var n1 = 1+3;
var n2 = 8
console.log(n2/n1);

var sInM = 60;
var mInH = 60;
var sInH = sInM*mInH;
console.log(sInH);
var hInD=24;
var sInD=sInH*hInD


var v1=7
console.log(v1++);

var v2=7
console.log(++v2);
console.log(v2+=10);

var d4 ="супедлиннаястрока";
console.log(d4.length);

var name="Сережа";
console.log(name[0]);
console.log(name[4]);
console.log(name.slice(1,5));
console.log(name.slice(2));
console.log(name.toUpperCase());
console.log(name.toLowerCase());

function s2 () {
    var s0 ='гДе Ты гдЕ';
    var s1 = s0[0].toUpperCase();
    var s3 = s0.slice(1).toLowerCase();
    s0=s1+s3; 
       
    console.log(s0);
}
s2();

var age=11;
var accom=true;
age>=12 || accom === true;
console.log(age);





function cat (){
    let murka = {
        "legs": 4,
        "name": "Мурка",
        "color": "черный"
}
console.log(murka.legs);}
cat();

function animals () {
    let dog ={name: "Бобик", age: 6, color:"белый", bark: "гав-гав!"};
    let cat= {name: "Сима", age: 10, color:"черно-белый"};
    console.log(Object.keys(dog));
    console.log(dog.name);
    let cat1 = {};
    cat1["legs"]=4;
    cat1["color"]="черный";
    console.log(Object.keys(cat1));
    let dog1 = {};
    dog1.name = "Бобик";
    console.log(Object.keys(dog1));
}
animals ();

function dino (){
    var dinosaurs = [
        { name: "Люся", age: 86, color:"белый" }
      
    ];
    console.log(dinosaurs[0]);
    console.log(dinosaurs[0]["name"]);
    console.log(dinosaurs[0].age);
}
dino();

var anna = { name: "Анна", age: 24};
var dave = { name: "Миша", age: 26};
var friends = [anna, dave];
console.log(friends[1].name)

var myCrazy = {
    "name": "Нелепый", "some array": [7, 9, { purpose: "путаница", number: 123}, 3.3]
};
console.log(myCrazy["some array"][2].number);
