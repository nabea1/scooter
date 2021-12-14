const User = require("../src/user");
describe("user Class", () => {
  const testUser = new User("dancing", "05/22/2001");
  test("user needs name", () => {
    expect(testUser.name).toBe("dancing");
  });
  test("user has date of birth", () => {
    expect(testUser.dateOfBirth).toBe("05/22/2001");
  });
  test("check assignToScooter", () => {
    testUser.assignToScooter();
    expect(testUser.assignToScooter()).toBe(
      `${testUser.name} assigned a scooter`
    );
  });
  test("check makePayment", () => {
    testUser.makePayment();
    expect(testUser.makePayment()).toBe("Paid");
  });
});
