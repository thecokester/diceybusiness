function Vehicle(wheels) {
    this.numberOfWheeels = wheels;
}

Vehicle.prototype.howManyWheels = function() {
    return 'I have' + this.numberOfWHeels + 'wheels';

}

var vehicle1 = new Vehicle(4);
var vehicle2 = new Vehicle(2);

vehicle1.howManyWheels();

vehicle2.amIAmotorcycle = function() {
    alert(true);
};