import {strictEqual} from "assert";
import {createNewGame} from "./SnakeGame";

describe('Snake game', () => {

  it('prints its grid', () => {
    strictEqual(createNewGame(2, 1).print(), ' \n \n');
  });

});