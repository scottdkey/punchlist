import { expect } from "chai"


describe("startup test", () => {
  it("should pass test", (done) => {
    expect(1 + 1).to.equal(2)
    expect(15 + 16).to.equal(31)
    done()
  })
})