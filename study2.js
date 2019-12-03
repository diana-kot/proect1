//функции
/*var name = function (howMany, whatToDraw) {
    for (var i =0; i<howMany; i++) {
        console.log(i + ' ' + whatToDraw);
    }
};
console.log(name [6,'^_^']);*/

var double = function (num) {
    return num * 2;
};
console.log(double(4));

var randWords = ['планета','цветок', 'космос'];
 var word = function(words){
     return words[Math.floor(Math.random()*words.length)];
 };
 console.log(word(randWords));
 console.log(word(["слово1", "слово2", "слово3"]));


 var letter = function(num1) {
     if (num1.length<5) {
         return;
     } return 'пятая буква вашего имени  ' +num1[4]+ '.';
 };
 console.log(letter('Нbr'));

 var medal = function(score) {
     if (score<3) {
         return 'бронза';
     }
     if (score<7) {
        return 'серебро';
    }  
    return 'золото';
     };
 console.log(medal(78));

 function d (c) {
     return c*3;
 }