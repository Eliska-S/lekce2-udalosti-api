// Samostatná práce v hodině a domácí úkol 1 a 2.

function ztucniPismo () {
    document.querySelector('.odstavec').classList.toggle('tucny');
}

function zmenaBarvy () {
    document.querySelector('.odstavec').classList.toggle('cervena');
}

let currentSize = 16;

function zvetsiPismo () {
    currentSize++;
    document.querySelector('.odstavec').style.fontSize = currentSize + "px";
}

// Domácí úkol 3 (API).

let zvuk = document.getElementById('js-audio');

function prehraj () {
    zvuk.play();
}

function pozastav () {
    zvuk.pause();
}

function ztlum () {
    zvuk.volume = 0;
}

function nastavHlasitost () {
    zvuk.volume = 0.5;
}

function zvysHlasitost () {
    zvuk.volume = 1;
}

function vratNaZacatek () {
    zvuk.currentTime = 0;
}

