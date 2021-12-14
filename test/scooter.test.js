const Scooter = require("../src/scooter");
describe("Scooter Class", () => {
  jest.setTimeout(8000);
  const testScotter = new Scooter(true, "Dancing Queen", false);
  test("Scooter is charged", () => {
    expect(testScotter.isCharged).toBe(true);
  });
  test("Scooter has location", () => {
    expect(testScotter.location).toBe("Dancing Queen");
  });
  test("Scooter is docked", () => {
    expect(testScotter.isDocked).toBe(false);
  });
  test("check markAsBroken", () => {
    testScotter.markAsBroken();
    expect(testScotter.markAsBroken()).toBe(false);
  });
  test("check dock", () => {
    testScotter.dock();
    expect(testScotter.dock()).toBe(true);
  });

  test("check charging", async () => {
    console.log("Test Complete");
    await testScotter.chargeCapacity();
  });
});
