"use strict";

/**
 * ###############################################
 *  Variablen Definitionen
 * ###############################################
 */
// 1. Eine Variable die den Wert 1 enthält.
var eins = 1;

// 2. Eine Variable die den Wert 1.1 enthält.
var einsEins = 1.1;

// 3. Eine Variable die den Wert true enthält.
var wahr = true;

// 4. Eine Variable die einen String enthält.
var aString = "hoi";

// 5. Eine Variable die ein Objekt enthält.
var anyObject = new Object();

// 6. Eine Variable die ein Array von Zahlen enthält.
var numberArray = [50, 10, 20, 30, 40];

// 7. Eine Variable die ein gemischtes Array von Zahlen und Objekten enthält.
var mixedArray = ["hoi", 10, "zwänzg", 30, "vierzg"];


// 8. Eine Variable die eine Funktion enthält.
var thisIsAFunction = function(param){
    if(param instanceof Array){
        console.log("---- array: ----");
        for(var i in param){
            console.log(param[i] + ": "+ typeof param[i]);

        }
        console.log("---------------");
        return;
    }
    console.log(param + ": "+ typeof param);
}
/*
console.log("---------------");

thisIsAFunction(eins);
thisIsAFunction(einsEins);
thisIsAFunction(wahr);
thisIsAFunction(aString);
thisIsAFunction(anyObject);
thisIsAFunction(numberArray);
thisIsAFunction(mixedArray);
*/

/**
 * ###############################################
 *  Array Definitionen
 * ###############################################
 */
// 1. Definieren Sie ein Array von Farben (als Strings) und geben Sie die Farben aus.
var colors = ["red", "green", "yellow", "blue", "purple"];

// 2. Fügen Sie weitere Elemente zum Array hinzu.
colors.push("pink", "black", "white");

// 3. Fügen Sie alle Farben zu einem String zusammen.
var allColors = "";
for(var color in colors){
    allColors = allColors + colors[color] + " ";
}

thisIsAFunction(colors);
console.log(allColors.trim());

// 4. Sortieren Sie das Array.
thisIsAFunction(colors.sort());


/**
 * ###############################################
 *  Array
 * ###############################################
 */
// Gegeben ist ein Array von Zahlen.
// Schreiben Sie eine Funktion die die Summe der Quadrate der Zahlen berechnet.
// Benutzen Sie dazu reduce.

var numbers = [1,2,3,4,5,6,7];
var result = numbers.reduce(function (x, y) {
    return x + y*y;
}, 0);

console.log(result);

console.log("---------------");

/**
 * ###############################################
 *  Konstruktoren
 * ###############################################
 */
// Schreiben Sie eine Funktion die alle Properties eines Objekts ausgibt.
function Person(){
    this.name = "Heiri";
    this.lastName = "Meier";
    this.age = 35;
    this.job = "Busschofför";
}
var person = new Person();

Object.keys(person).forEach(function (key) {
    var val = person[key];
    console.log(val);
});


// Verwenden Sie die vorhandenen Konstruktoren von Object und Date um Objekte zu erzeugen.
var obj = new Object();
var date = new Date();
date.setDate(15);
date.setMonth(10);
date.setFullYear(2018);
console.log(date);


// Schreiben Sie einen Konstruktor für Intervall Objekte.
// Ein Intervall Objekt abstrahiert ein Zahlenintervall zwischen 2 Werten.
// Alle Intervall Objekte sollen eine Funktion isInside(value) zur Verfügung stellen,
// die true zurück gibt, wenn das Argument value im Intervall liegt.


/**
 * ###############################################
 *  Repetition
 * ###############################################
 */

//immediate auch grad das

// closures
var stack = function(){
    var data = [];
    return {
        push: function(item){
            data.push(item);
        }
        //pop: ...
    };
}();

//
//var cirlcle = Object.create(shape);

// Prototypes
// circle hat als prototype ein shape, shape hat als prototype ein x
var x = circle.x;
circle.x = 2.0;

// x referenziert auf shape, nimmt da das property x, das bei shape existiert
// circle.x erstellt ein neues property bei circle und setzt es auf 2.0
// auf prototypes wird nie schreibend zugegriffen, nur lesen. wenn schreiben: property für objekt wird erstellt!