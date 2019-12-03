var name = 'сережа';
console.log("Привет, "+ name);
if (name.length > 6) {
    console.log('ну и длиннющее же у вас имя!');
} else {
    console.log('у вас довольно короткое имя');
}

var lemonChicken = false;
var blascBean = false;
var sweet= false;
if (lemonChicken) {
    console.log('Отлично я буду курицу с лимоном!');
}   else if (blascBean) {
    console.log('заказываю говядину');
}   else if (sweet) {
    console.log('Дадно, закажу свинину');
} else {
    console.log('Что ж, остается рис с яйцом')
}

var name = 'Сережа'
if (name ==='Диана') {
   console.log('Привет, Диана!') 
} else {
    console.log('привет, незнакомец!')
}
var carCounted = 0;
while (carCounted<10) {
    console.log('Просчитано машин: '+ carCounted+ '!');
    carCounted++;
}
for (var carCounted = 0; carCounted<10; carCounted++) {
    console.log('посчитано машин:' + carCounted + '!' );
}
var animals= ['лев', 'фламинго', 'белый медведь', 'удав'];
for (var i = 0; i<animals.length; i++) {
    console.log('В этоп зоопарке есть  ' +animals[i]+'.');
}

var name = 'Дианка';
for (i=0; i< name.length; i++) {
    console.log('В моем имени есть буква ' + name[i]+ '.');
}

for (var x = 2; x< 10000; x *= 2) {
    console.log(x);
}
/*
var name = prompt('Как вас зовут?');
console.log('Привет ' + name);

var Likedog = confirm('Тебе нравятся песики?');
if (Likedog) {
    console.log('Все любят песиков');
} else {
    console.log('Что ж, не проблема. Все равно ты молодец!');
}

alert('JS это здорово!');*/

/* 
1 Случайным образом выбирать слово
2 Запрашивать у игрока вариант ответа (букву)
3 завершить игру по желанию игрока4 Проверять является ли введенный ответ буквой
4 вести учет угаданных букв
5 показывать игроку, сколько букв он угадал и сколько еще предстоит угадать
6 завершить инру, если слово отгадано
*/

var words = [
    'программа', 'макака', 'прекрасный', 'оладушек'
];
var word = words[Math.floor(Math.random()*words.length)];//случайное слово

var answerArray = []; //массив с ответом
for (var i = 0; i< word.length; i++) {
    answerArray[i] = '_ ';
}
var letters = word.length; //Сколько букв осталось отгадать

while (letters>0) {
    alert(answerArray.join(''))
    var guess = prompt('Угадайте букву или нажмите Отмене для выхода из игры.'); //предлагаемая буква
if (guess===null){//если нажата отмена
    break; //выйти из цикла
} else if (guess.length !== 1) {//ввел не одну букву
    alert('пожалуйста, введите только одну букву');
} else {
 for (var j = 0; j<word.length; j++) {
     if (word[j] === guess) {
        answerArray[j] = guess;
        letters--;
     }
   }
  }
}
alert(answerArray.join(' '));
alert('Отлично, было загадано слово ' + word);
