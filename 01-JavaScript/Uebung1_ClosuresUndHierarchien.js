"use strict";
/**
 * ################################################################################
 *  Closures
 *
 *  Erzeugen Sie ein Objekt myStack, dass die Methoden push() und pop() enthält,
 *  um Objekte zu einem Stack hinzuzufügen und wieder zu entfernen.
 *  Der eigentliche Stack sollte nur über dieses Objekt zugreifbar sein.
 * ################################################################################
 */

var myStack = function(){
    var stack = [];

    return {
        push: function(item){
            stack.push(item);
            console.log(item + " pushed to stack (" + stack.length + ")");
        },
        pop: function(){
            stack.pop();
            console.log("last one popped from stack (" + stack.length + ")");
        }
    };
};

/*
var stackediStack = myStack();
stackediStack.push(556);
stackediStack.push(123);
stackediStack.pop();
*/

/**
 * ################################################################################
 *  Objekt Hierarchien
 *
 *  1) Erzeugen Sie eine Hierarchie von zeichenbaren Objekten Shape, Rectangle und Circle.
 *  Alle Objekte haben eine Position x und y, sowie eine Methode draw,
 *  die ausgibt welches Objekte mit welchen Attributen gezeichnet wird.
 *  I.e. Circle at Position (2, 3) mit Radius 5..
 *  Definieren Sie Konstruktoren für Ihre Objekte und fügen sie die notwendigen Attribute
 *  und Funktionen hinzu.
 *
 *  2) Derived Properties.
 *  Fügen Sie ein Property area hinzu, das abgefragt werden kann.
 *  Der Wert des Properties soll aus den anderen Properties des Objekts berechnet werden.
 *
 *  3) Serialisieren Sie die Objekte in JSON.
 *  Stellen Sie sicher, dass das Read-Only Property area nicht serialisiert wird.
 *
 * 4) Was ist der Unterschied zwischen Objekt-Hierarchien in JavaScript und
 * Vererbung in anderen OO Programmiersprachen? Was sind die Vor- und Nachteile?
 *
 * ################################################################################
 */

// 1) und 3)
function exercise1(){
    function Shape(){
        this.x = 0.0;
        this.y = 0.0;
        this.draw = function () {
            console.log('Shape at Position ' + this.x + ', ' + this.y);
        }
    }

    var shape = new Shape();
    shape.y = 2.0;
    shape.draw();

    function Circle(radius){
        this.radius = radius;
        Object.defineProperty(this, 'area', {
            get: function () {
                return this.radius * this.radius * 3.14;
            }
        });
        this.draw = function () {
            console.log('Circle at Position ' + this.x + ', ' + this.y + ', area: ' + this.area);
        }
    }

    var circle = new Circle(3);
    circle.x = 20;
    circle.y = 15;
    circle.draw();

    // JSON Stuff
    var circleAsJson = JSON.stringify(circle);
    var shapeAsJson = JSON.stringify(shape);
    console.log(circleAsJson);
    console.log(shapeAsJson);
}

console.log("----- ex. 1 -----");
exercise1();

// 2)
function exercise2(){
    var shape = {
        x: 0.0,
        y: 0.0,
        draw: function () {
            console.log('Shape at ' + this.x + ", " + this.y);
        }
    };

    var circle = Object.create(shape);
    circle.radius = 2.0;
    Object.defineProperty(circle, 'area', {
        get: function () {
            return this.radius * this.radius * 3.14;
        }
    });
    circle.draw = function () {
        console.log('Circle at ' + this.x + ', ' + this.y + ' with area ' + this.area);
    };

    shape.x = 30.0;
    shape.y = 50.0;
    shape.draw();

    circle.x = 2.0;
    circle.draw();
}

console.log("----- ex. 2 -----");
exercise2();

