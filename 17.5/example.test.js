import { revertString } from "./example";

describe ("tests for revertString function", () => {
  it("should reverse string", () => expect(revertString("abc")).toBe("cba"));
});