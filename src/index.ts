import { SnakeGame } from "./SnakeGame";
import { Cell, Snake } from "./Snake";

(async function main() {
  const [width, height] = process.argv.splice(2);

  const game = new SnakeGame(
    Number(width),
    Number(height),
    new Snake([new Cell(0, 2), new Cell(0, 1)]));

  process.stdin.resume();
  process.stdin.setRawMode!(true);
  process.stdin.on('data', function (chunk) {
    console.log('received: ', chunk.toString());
    if (chunk.toString() === 'q') process.exit();
  });

  const refreshRate = 1000;
  setInterval(() => console.log(game.print()), refreshRate);
})();