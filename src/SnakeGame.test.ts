import { strictEqual } from "assert";
import { SnakeGame } from "./SnakeGame";
import { cell, snake } from "./Snake";

describe('Snake game', () => {

  it('prints its snake', () => {
    strictEqual(new SnakeGame(4, 3, snake([cell(2, 0), cell(1, 0), cell(0, 0)])).print(),
`
 ---- 
|ooQ |
|    |
|    |
 ---- 
`);
  });

  it('moves the snake', async () => {
    const snakeGame = new SnakeGame(4, 3, snake([cell(2, 0), cell(1, 0), cell(0, 0)]));
    const nextFrame = await snakeGame.nextFrame();
    strictEqual(nextFrame.print(),
      `
 ---- 
| ooQ|
|    |
|    |
 ---- 
`)
  });

});