import { strictEqual } from "assert";
import { SnakeGame } from "./SnakeGame";
import { cell, snake } from "./Snake";

describe('Snake game', () => {

  it('prints its snake', () => {
    strictEqual(new SnakeGame(4, 3, snake([cell(3, 1), cell(2, 1), cell(1, 1)])).print(),
`
 ---- 
|ooQ |
|    |
|    |
 ---- 
`);
  });

});