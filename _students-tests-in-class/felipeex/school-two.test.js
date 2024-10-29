import { expect } from "chai";
import { evaluateStudent } from "../src/school2.js";

describe("evaluateStudent function", () => {
  it("should be able to evaluate approve student with 7 average", () => {
    const result = evaluateStudent("Felipe Lima Santos", 7, 7);
    expect(result).to.equal("Approved");
  });

  it("should be able to evaluate retain student with 6 average", () => {
    const result = evaluateStudent("Felipe Lima Santos", 6, 6);
    expect(result).to.equal("Retained");
  });

  it("shouldn't be able to evaluate student with an invalid name", () => {
    const result = evaluateStudent("Fe");
    expect(result).to.equal("Invalid name");
  });

  it("shouldn't be able to evaluate student with an negative grade", () => {
    const result = evaluateStudent("Felipe Lima Santos", -1, -1);
    expect(result).to.equal("Invalid grade");
  });
});
