import { strictEqual } from "assert";
import { SnakeGame } from "./SnakeGame";
import { Cell, snake } from "./Snake";

describe('Snake game', () => {

  it('prints its snake', () => {
    strictEqual(new SnakeGame(3, 4, snake([new Cell(2, 0), new Cell(1, 0), new Cell(0, 0)])).print(),
`
 ---- 
|ooQ |
|    |
|    |
 ---- 
`);
  });

});