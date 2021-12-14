const ChargingStation = require("../src/chargestation");
describe("ChargeStation Class", () => {
  jest.setTimeout(8000);
  const testChargeStation = new ChargingStation("Six Flags");
  test("ChargeStation is location", () => {
    expect(testChargeStation.stationLocaton).toBe("Six Flags");
  });
  test("ChargeStation capacity", () => {
    expect(testChargeStation.capacity).toBe(10);
  });

  test("check charging", async () => {
    await testChargeStation.charge();
    console.log("Charging Complete");
  });
});
