class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }

    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }

    lightStatus() {
        console.log('Lights on ', this.lightsOn);
    }

    getSelf() {
        console.log(this);
    }

    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}

// var myFirstTrain = new Train("red", false);

// console.log(myFirstTrain);
// myFirstTrain.toggleLights();
// myFirstTrain.lightStatus();
// myFirstTrain.getSelf();
// myFirstTrain.getPrototype();

class HighSpeedTrain extends Train {
    constructor(pessengers, highSpeed, color, lightsOn) {
        super(color, lightsOn);
        this.pessengers = pessengers;
        this.highSpeed = highSpeed;
    }

    toggleHighSpeed() {
        this.highSpeed = !this.highSpeed;
        console.log("high Speed Status: ", this.highSpeed);
    }

    toggleLights() {
        super.toggleLights();
        super.lightStatus();
        console.log("Lights Are 100% operational. ");
    }
}

var train1 = new Train("red", false);
console.log(train1);
var highSpeedTrain = new HighSpeedTrain(23, false, "blue", false);
console.log(highSpeedTrain);

train1.toggleLights();
train1.lightStatus();

class cake {
    constructor(lyr) {
        this.layers = lyr;
    }

    getLayers() {
        return this.layers;
    }
}

class weddingCake extends cake {
    constructor() {
        super(2);
    }

    getLayers() {
        return super.getLayers() * 5;
    }
}

var result = new weddingCake();
console.log(result.getLayers());