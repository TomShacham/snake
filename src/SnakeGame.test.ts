import {strictEqual} from "assert";
import {createNewGame} from "./SnakeGame";

describe('Snake game', () => {

  it('prints its grid', () => {
    strictEqual(createNewGame(3, 2).print(),
`
 -- 
|  |
|  |
|  |
 -- 
`);
  });

});