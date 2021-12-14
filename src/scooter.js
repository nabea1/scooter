class Scooter {
  static availableScooter = [];
  static unavailableScooter = [];
  static count = 0;
  constructor(isCharged, location, isDocked) {
    this.idNumber = `S${++Scooter.count}`;
    this.isCharged = isCharged;
    this.location = location;
    this.isDocked = isDocked;
    Scooter.availableScooter.push(this.idNumber);
  }

  async chargeCapacity() {
    console.log("Battery full");
    console.log(`Battery level low,Place the scooter ${this.idNumber}`);
    await new Promise((resolve) => setTimeout(resolve, 7000));
  }

  markAsBroken() {
    if (this.isDocked === false && this.isCharged === false) {
      Scooter.unavailableScooter.push(this.idNumber);
      return true;
    } else {
      Scooter.availableScooter.push(this.idNumber);
      return false;
    }
  }
  dock() {
    // if(this.isCharged==true)
    // Scooter.availableScooter.push(this.idNumber)
    return true;
  }
}
module.exports = Scooter;
const s1 = new Scooter(true, "SW", true);
const s2 = new Scooter(false, "NV", false);
// console.log(s1)
// console.log(s2)
s1.markAsBroken();
s2.markAsBroken();
// console.log(Scooter.availableScooter)
// console.log(Scooter.unavailableScooter)
console.log(s1.chargeCapacity());
