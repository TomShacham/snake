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
    strictEqual(snake([cell(2, 1), cell(1, 1)]).isSnake(2, 1), 'head');
  });

  it('given a cell it says if it a body', () => {
    strictEqual(snake([cell(2, 1), cell(1, 1)]).isSnake(1, 1), 'tail');
  });

  it('given a cell it says if it is not part of a snake', () => {
    strictEqual(snake([cell(2, 1), cell(1, 1)]).isSnake(3, 1), 'none');
  });

  it('moves right', () => {
    deepEqual(
      snake([cell(2, 0), cell(1, 0)], Direction.Right).move(),
      snake([cell(3, 0), cell(2, 0)], Direction.Right))
  });

  it('moves left', () => {
    deepEqual(
      snake([cell(2, 0), cell(1, 0)], Direction.Left).move(),
      snake([cell(1, 0), cell(0, 0)], Direction.Left))
  });

  it('moves up', () => {
    deepEqual(
      snake([cell(2, 1), cell(1, 1)], Direction.Up).move(),
      snake([cell(2, 0), cell(1, 0)], Direction.Up))
  });

  it('moves down', () => {
    deepEqual(
      snake([cell(2, 0), cell(1, 0)], Direction.Down).move(),
      snake([cell(2, 1), cell(1, 1)], Direction.Down))
  });

  it('commanded to move in a new direction (right)', () => {
    deepEqual(
      snake([cell(2, 0), cell(1, 0)], Direction.Up).move('d'),
      snake([cell(3, 0), cell(2, 0)], Direction.Right))
  });

});
