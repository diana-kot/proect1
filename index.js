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