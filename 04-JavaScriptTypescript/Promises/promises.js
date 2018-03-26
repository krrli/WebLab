/**
 * Promises
 * Erstellen Sie eine Funktion die eine Promise zurückgibt, welche ein Array von Strings
 * in Grossbuchstaben (mittels toUpperCase()) umwandelt und diesen zurückgibt.
 * Im Fall, dass ein Element des Array kein String ist, soll ein Fehler auftreten.
 *
 * Machen sie die Funktion mittels setTimeout asynchron.
 *
 * Verkettung von Promises
 * Erstellen Sie eine zweite Funktion, die ein Array von Strings sortiert
 * und verketten Sie die beiden Promises.
 * Was geschieht beim Fehlerfall in der ersten Promise?
 */


"use strict";
function stringArray2Uppercase(stringArray){
    var promise = new Promise(function(resolve, reject){
        setTimeout(function () {
            const arrayUppercase = stringArray.map(value =>{
                if(typeof value ==='string'){
                    return value.toUpperCase();
                }
                reject("value is not a String!");
            })
            resolve(arrayUppercase);

        }, 1000)
    });

    return promise;
}

function sortArray(array){
    return array.sort();
}

function main(){
    var stringArray = ["hoi", "tschüss", "blabla", "supi"];
    var irgendoepisArray = ["hoi", "tschüss", 123, "blabla", "supi"];

    stringArray2Uppercase(stringArray)
        .then(console.log)
        .then(sortArray(stringArray))
        .catch(console.error);


    stringArray2Uppercase(irgendoepisArray)
        .then(console.log)
        .then(sortArray(stringArray))
        .catch(console.error);
}

main();