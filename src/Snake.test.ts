import { deepEqual, strictEqual } from "assert";
import { cell, Cell, Direction, snake } from "./Snake";

describe("Snake", () => {

  it("has a head", () => {
    deepEqual(snake().head, new Cell(2,1))
  });

  it("has a direction", () => {
    strictEqual(snake().direction, Direction.Right)
  });

  it('given a cell it says if it a head', () => {
    strictEqual(snake( [cell(2, 1), cell(1, 1)]).isSnake(2,1), 'head');
  });

  it('given a cell it says if it a body', () => {
    strictEqual(snake( [cell(2, 1), cell(1, 1)]).isSnake(1,1), 'tail');
  });

  it('given a cell it says if it is not part of a snake', () => {
    strictEqual(snake( [cell(2, 1), cell(1, 1)]).isSnake(3,1), 'none');
  });

});
