function getSomeDataSync(){
    var data = Math.random().toString(36).substr(2,5);
    console.log('Got the data: ' + data);
}

function error(error) {
    // hier halt error zeugs einfüllen
    // error callback
    console.log("error: " + error);
}


function finished(data) {
    // hier halt error zeugs einfüllen
    // error callback
    console.log("done with: " + data);
}


function getSomeData(onSuccess, onError){
    setTimeout(function () {
        var data = Math.random().toString(36).substr(2,5);
        console.log('Got the data: ' + data);

        // dieser error da würde dann irgendwo mal gecatched. oder halt niemand (runtime catched sie)
        // wenns auf dem server läuft: server kackt ab
        // javascript handler (node.js) angeben, dann handelt der den error
        // wir sind nicht auf dem callstack von getSomeData, wenn hier throw... macht.
        // throw Error('error');

        onSuccess(data);
    }, 1000)
}

function main(){
    console.log('Start');
    getSomeData(finished, error);
    // das wird nach Start aufgerufen, funktion getSomeData wartet ein bizeli, funktion kommt aber grad zurück
    console.log('Hello');

}



//main();

// dasselbe mit promises
function getSomeDataPromise(){
    return new Promise(function(resolve, reject){
        // diese funktion soll das machen, was getSomeData macht
        setTimeout(function () {
            var data = Math.random().toString(36).substr(2,5);
            console.log('Got the data: ' + data);

            // statt onSuccess wird resolve gerufen!
            //onSuccess(data);
            //resolve(data);
            reject(data);
        }, 1000)
    });
}



function mainPromises(){
    console.log('Start with Promises');
    getSomeDataPromise().then(finished, error);

    /*
    getSomeDataPromise()
        .then(processData)
        .then(storeSomeData)
        .then(finished, error);
        */
}

mainPromises();