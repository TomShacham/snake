import { strictEqual } from "assert";
import { SnakeGame } from "./SnakeGame";
import { cell, snake } from "./Snake";

describe('Snake game', () => {

  it('prints its snake', () => {
    strictEqual(new SnakeGame(4, 3, snake([cell(0, 2), cell(0, 1), cell(0, 0)])).print(),
`
 ---- 
|ooQ |
|    |
|    |
 ---- 
`);
  });

});