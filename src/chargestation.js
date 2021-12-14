class ChargeStation {
  static avaliableAtDocStation = [];
  constructor(stationLocaton) {
    this.stationLocaton = stationLocaton;
    this.capacity = 10;
  }

  async charge() {
    console.log("start charging");
    await new Promise((resolve) => setTimeout(resolve, 2000));
    //console.log('charge complete')
  }
}

module.exports = ChargeStation;
const c1 = new ChargeStation("SW");
console.log(c1.charge());
