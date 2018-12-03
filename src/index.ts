import { SnakeGame } from "./SnakeGame";
import { Cell, Snake } from "./Snake";

(async function main() {
  const [width, height] = process.argv.splice(2);

  const game = new SnakeGame(Number(width), Number(height), new Snake([new Cell(0, 2), new Cell(0, 1)]));

  const refreshRate = 1000;

  setInterval(() => console.log(game.print()), refreshRate);
})();