import { deepEqual, strictEqual } from "assert";
import { Cell, Direction, snake } from "./Snake";

describe("Snake", () => {

  it("has a head", () => {
    deepEqual(snake().head, new Cell(1, 2))
  });

  it("has a direction", () => {
    strictEqual(snake().direction, Direction.Right)
  });

  it('given a cell it says if it a head', () => {
    strictEqual(snake([new Cell(1, 2), new Cell(1, 1)]).isSnake(1, 2), 'head');
  });

  it('given a cell it says if it a body', () => {
    strictEqual(snake([new Cell(1, 2), new Cell(1, 1)]).isSnake(1, 1), 'tail');
  });

  it('given a cell it says if it is not part of a snake', () => {
    strictEqual(snake([new Cell(1, 2), new Cell(1, 1)]).isSnake(1, 3), 'none');
  });

});
