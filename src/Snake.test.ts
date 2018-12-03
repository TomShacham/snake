import { deepEqual, strictEqual } from "assert";
import { Cell, Direction, snake } from "./Snake";

describe("Snake", () => {

  it("has a head", () => {
    deepEqual(snake().head, new Cell(2,1))
  });

  it("has a direction", () => {
    strictEqual(snake().direction, Direction.Right)
  });

});
